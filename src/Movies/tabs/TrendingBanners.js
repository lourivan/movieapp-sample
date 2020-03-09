import * as React from 'react'
import { View,Text, Dimensions, ActivityIndicator, Image, StyleSheet } from 'react-native'
import Api from '../../_services/Api'
import ApiKey from '../../_util/ApiKey'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { Container, BannerChild, BannerImage } from './Style'
import AsyncImage from '../../_util/AsyncImage'

export const { width, height } = Dimensions.get('window')

export default class TrendingBanners extends React.Component{

    state = {
        isLoading: true,
        banners: null
    }

    componentDidMount = async () => {
        const lang = global.props.lang
        const banners = await Api.get(`/trending/movie/day?api_key=${ApiKey}&language=${lang}&page=1`)
        if(banners.data.results.length){
            this.setState({
                banners: banners.data.results,
                isLoading: false
            })
        }
     }
 

    renderBanner = () =>{
        let banners = this.state.banners
        if(!this.state.isLoading){
            global.props.hideLoader()
            if(!banners.length){
                return(
                    <View>
                        <Text>Não ha lançamentos disponíveis!</Text>
                    </View>
                )
            }else{
                return(
                    <Container>
                        <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        index={0}
                        showPagination
                        paginationStyleItem={{
                            width: 3,
                            height: 3,
                            padding: 0
                        }}
                        paginationActiveColor="red"
                        >
                            { banners.map((item, index)=>{
                                return(
                                    <View key={index}>
                                        <AsyncImage 
                                        thumbnailSource={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                                        style={{ width: width, height: height }} resizeMode="cover" />
                                    </View>
                                )
                            })}
                        </SwiperFlatList>
                    </Container>
                )
            }
        }else{
            global.props.showLoader()
        }
            
    }


    render(){
        return(
            <View>
                { this.renderBanner() }
            </View>
        )
    }
}
