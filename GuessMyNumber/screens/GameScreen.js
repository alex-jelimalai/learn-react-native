import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from '../components/game/NumberContainer'
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const {width, height} =  useWindowDimensions();

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [userNumber, currentGuess, onGameOver]);

    function nextGuessHandler(direction) {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess >= userNumber) {
            Alert.alert("Don't lie to me", "You know it is wrong", [{ text: "sorry", style: 'cancel' }]);

        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess;
        }
        let newCurrentGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newCurrentGuess);
        setGuessRounds(prev => [newCurrentGuess, ...prev])
    }

    const guessRoundsLenght = guessRounds.length;

    let content = <>
     <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instrunctionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="remove" size={24} color='white' />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('greather')}>
                        <Ionicons name="add" size={24} color='white' />
                    </PrimaryButton>
                </View>
            </View>
        </Card></>

        if(width>500){
            content = <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name="remove" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('greather')}>
                            <Ionicons name="add" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
               
             </>
        }

    return <View style={styles.screen}>
        <Title>
            Oponent's Guess
        </Title>
       {content}
        <View style={styles.listContainer}>
            <FlatList data={guessRounds}
                keyExtractor={(r) => r}
                renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRoundsLenght - itemData.index}/>}/>
        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems:'center',
        marginTop:10
    },
    buttonsContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        textAlign: 'center',
        flex: 1
    },
    instrunctionText: {
        marginBottom: 12,
    },
    listContainer:{
        flex:1,
        padding:16
    }

})
