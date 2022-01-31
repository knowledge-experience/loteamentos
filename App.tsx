import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Maps} from "./src/Maps";
import {Svg} from "./src/Svg";
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    left: 40,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  text: {
    color: '#fff'
  }
})

export default function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <View style={styles.container}>
      {showMap ? <Maps/> : <Svg/>}
      <TouchableOpacity onPress={() => setShowMap(!showMap)} style={styles.toggleButton}>
        <Text style={styles.text}>Toggle</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}
