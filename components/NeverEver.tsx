import { Text, TextProps, View } from './Themed';
import NeverEver from './questions/NeverEver';
import PointingGame from './questions/WhoInTheRoom';
import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export function NeverEverQ(this: any, props: TextProps) {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B86566',
    },
    textContainer: {
      backgroundColor: '#B86566',
      borderWidth: 1,
      borderColor: '#fff',
      margin: 20,
      height: 150,
    },
    button: {
      backgroundColor: '#B86566',
      color: '#fff',
      borderWidth: 1,
      borderColor: '#fff',
      bottom: 20,
      margin: 20,
      height: 40,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  let [question, setQuestion] = useState("Tryck på ny fråga för att börja spelet..");
  //setQuestion("Tryck på ny fråga för att börja spelet..");

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
  }

  const newQuestion = () => {
    setQuestion( NeverEver[getRandomIntInclusive(0, 100)]);
  }

  return <View style={styles.container}>
    <View style={styles.textContainer}>
    <Text {...props} style={[props.style, { fontFamily: 'zackSarah' }]}> {question} </Text>
    </View>
    <View style={styles.button}>
    <Button
      title="Ny fråga"
      onPress={() => newQuestion()}
      color="#fff"
    />
    </View>
  </View>;
}
