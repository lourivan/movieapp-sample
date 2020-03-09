import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import Api from '../../_services/Api'
import ApiKey from '../../_util/ApiKey'

export default class PopularMovies extends React.Component{

    state={
        isLoading: true,
        genres: null,
        movies: null
    }

    componentDidMount = async() =>{
        const lang = global.props.lang
        const genres = await Api.get(`/genre/movie/list?api_key=${ApiKey}&language=${lang}`)
        const moviesList = await Api.get(`/discover/movie?api_key=${ApiKey}&language=${lang}&sort_by=original_title.asc&include_adult=false&include_video=false&page=1`)
        
        this.setState({
            isLoading: false,
            genres: genres.data.genres.length ? genres.data.genres : null,
            movies: moviesList.data.results.length ? moviesList.data.results : null
        })
        
    }

    renderList(){
        const data = this.state
        if(!data.isLoading){
            global.props.hideLoader()
            if(data.genres.length && data.movies.length){
                let sections = []
                for(let k=0; k < data.genres.length; k++){
                    sections.push( { title: data.genres[k].name, data: [] })
                    data.movies.map((value,i)=>{
                        value.genre_ids.map((item,n)=>{
                            if(item === data.genres[k].id){
                                sections[k].data.push(value.title)
                            }
                        })
                    })
                }

                let itens = []
                sections.map((item,i) => {
                    if(item.data.length){
                        itens.push(item)
                    }
                })
                
                return (
                    <View>
                        <SectionList
                        sections={itens}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                        />
                    </View>
                )

            }else{
                return (
                    <Text>Não foram encontrados resultados!</Text>
                )
            }
        }else{
            global.props.showLoader()
        }
    }

    render(){
        return(
            <View style={styles.container}>
                { this.renderList() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      fontSize: 14,
      color: 'red',
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 16,
      height: 44,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0'
    },
})
  