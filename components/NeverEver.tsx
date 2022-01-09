import { Text, TextProps, View } from './Themed';
import NeverEver from './questions/NeverEver';
import PointingGame from './questions/WhoInTheRoom';
import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export function NeverEverQ(this: any, props: TextProps) {

  const styles = StyleSheet.create({
    textContainer: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#4DC46E',
      margin: 20
    },
    button: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#4DC46E',
      bottom: 20,
      margin: 20
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

  return <View>
    <View style={styles.textContainer}>
    <Text {...props} style={[props.style, { fontFamily: 'whatever' }]}> {question} </Text>
    </View>
    <View style={styles.button}>
    <Button
      title="Ny fråga"
      onPress={() => newQuestion()}
      color="#4DC46E"
    />
    </View>
  </View>;
}
