import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaPrincipal from './telas/TelaPrincipal';
import TelaLocaliza from './telas/TelaLocaliza';
import TelaMeteoro from './telas/TelaMeteoro';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLocaliza/>
      <StatusBar style="auto" />
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
});
