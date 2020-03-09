import * as React from 'react';
import { Text, View,StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Toolbar, Subheader } from 'react-native-material-ui';
// Screens
import Movies from './Movies'
import Series from './Series'

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator ();

export default class Main extends React.Component {
    render(){
        return(
            <NavigationContainer>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={styles.mainContainer}>
                    <Toolbar 
                        centerElement="Cinema App (Sample)"
                        style={{
                            container: {
                                backgroundColor: '#000',
                                elevation: 1,
                                borderWidth: 0,
                                shadowOpacity: 0
                            },
                            titleText: {
                                color: '#FFF',
                                fontFamily: 'Roboto-Thin',
                                fontSize: 14
                            },
                            rightElement: {
                                color: '#FFF'
                            }
                        }}
                        searchable={{
                            autoFocus: true,
                            placeholder: 'Buscar filme...',
                        }}
                    />
                </View>
                <Tab.Navigator 
                    initialRouteName="Home"
                    activeColor="#FFF"
                    barStyle={{
                        backgroundColor: '#5A5A5A'
                    }}
                    labelStyle={{ fontSize: 16 }}
                >
                    <Tab.Screen 
                        name="Movies" 
                        component={Movies} 
                        options={{
                            tabBarLabel: 'Filmes',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="home" size={24} color={color} />
                            )
                        }}
                    />
                    <Tab.Screen 
                        name="Series" 
                        component={Series} 
                        options={{
                            tabBarLabel: 'Séries',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="card-giftcard" size={24} color={color} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles =  StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000'
    },
})