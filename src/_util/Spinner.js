// import styled from 'styled-components';
import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const style = StyleSheet.create({
    spinnerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        elevation: 5,
        top:0,
        left: 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

const Spinner = ({loading}) => {
    return loading ? (
        <View style={style.spinnerContainer}>
            <ActivityIndicator size="large" color="red" />
        </View>
    ) : null 
}

export default Spinner