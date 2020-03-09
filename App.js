/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import 'react-native-gesture-handler'
import Main from './src/Main'
import {AppProvider,AppConsumer} from './src/_context/AppProvider'

export default class App extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <AppProvider {...this.props}>
        <AppConsumer>{funcs => { 
            global.props = {...funcs}
            return <Main {...funcs} />
           }}  
        </AppConsumer>
      </AppProvider>
    )
  }
}