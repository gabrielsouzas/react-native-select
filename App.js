import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Select from './src/components/Select';
import { useState } from 'react';

export default function App() {
  const [selectedItem, setSelectedItem] = useState('');

  const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Text style={{ color: '#FFF' }}>Select: </Text>
        <Select
          options={options}
          placeholder="Select an item"
          setSelectedItem={setSelectedItem}
        />
      </View>
      <Text style={styles.text}>{`Item selecionado: ${selectedItem}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 999999,
  },
  text: {
    marginTop: 10,
    color: '#FFF',
  },
});
