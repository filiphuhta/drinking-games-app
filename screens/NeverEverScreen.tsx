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
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.fixToText}>
        <NeverEverQ style={styles.text}></NeverEverQ>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 20,
    padding: 20,
  }
});
