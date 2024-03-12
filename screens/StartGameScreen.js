import React, { useState } from 'react'
import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();
    
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert(
                'Invalid Number !', 
                'Number has to be a number between 1 and 99',
                [{text : 'Okay', style: 'destructive', onPress: resetInputHandler}]
                );
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior='position'>
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none' 
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems:'center'
    },
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
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1
    }
})


export default StartGameScreen