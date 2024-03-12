import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'


const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        marginTop: 30
    }
});

export default Title