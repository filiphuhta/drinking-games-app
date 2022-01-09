import { StyleSheet } from 'react-native';
import { Text, View, } from '../components/Themed';
import { Button } from 'react-native';

export default function WelcomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välkommen!</Text>
      <Text style={styles.standardText}>Välj vilket spel du vill spela</Text>
      <View style={styles.button}> 
       <Button
        title="Jag har aldrig"
        onPress={() => navigation.navigate('NeverEver')}
        color="white"
      />
      </View>
      <View style={styles.button}> 
       <Button
        title="Pekleken"
        onPress={() => navigation.navigate('Pointing')}
        color="white"
      />
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
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 20,
    color: '#FFF'
  },
  standardText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderColor: 'white',
    height:70,
    borderWidth: 1,
    margin: 20,
    alignSelf: 'stretch',
    backgroundColor:'#B86566',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
