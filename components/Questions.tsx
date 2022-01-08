import { Text, TextProps } from './Themed';
import NeverEver from './questions/NeverEver';

export function NeverEverQ(props: TextProps) {

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
  }

  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]}> {NeverEver[getRandomIntInclusive(0,100)]} </Text>;
}



