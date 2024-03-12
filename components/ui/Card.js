import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 35,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.50,
        backgroundColor: Colors.primary800
    },
});