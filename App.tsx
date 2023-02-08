import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from "./src/params"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
      <Text>Tamanho de grade: {params.getColumnsAmount()}x{params.getRowsAmount()}</Text>
      <Field nearMines={0}/>
      <Field opened nearMines={0}/>
      <Field opened nearMines={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
