import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { NeverEverQ } from '../components/NeverEver';
import { Button, Alert } from 'react-native';

export default function NeverEverScreen({ navigation }: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jag har aldrig..</Text>
      <View style={styles.fixToText}>
        <NeverEverQ style={styles.text}></NeverEverQ>
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
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'zackSarah',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    padding: 20,
  }
});
