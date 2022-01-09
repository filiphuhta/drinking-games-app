import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { WhoInTheRoom } from '../components/WhoInTheRoom';
import { Button, Alert } from 'react-native';

export default function PointingScreen({ navigation }: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peka på den som har störst chans att..</Text>
      <View style={styles.fixToText}>
        <WhoInTheRoom  style={styles.text}></WhoInTheRoom >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B86566',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  fixToText: {
    width: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'zackSarah',
    margin: 20,
  },
  text: {
    fontSize: 20,
    padding: 20,
  }
});
