import * as React from 'react'
import { View  } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TrendingBanners from './tabs/TrendingBanners'
import PopularMovies from './tabs/PopularMovies'

const Tab = createMaterialTopTabNavigator();

export default class Movies extends React.Component {
  render(){
    return (
      <Tab.Navigator swipeEnabled={false} lazy={true}>
        <Tab.Screen name="ProximosLancamentos" component={TrendingBanners} options={{ tabBarLabel: 'Próximos Lançamentos' }} />
        <Tab.Screen name="Populares" component={PopularMovies} />
      </Tab.Navigator>
    )
  }
}
