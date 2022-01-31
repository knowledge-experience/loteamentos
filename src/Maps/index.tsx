import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export const Maps: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
               provider='google'
               initialRegion={{
                 latitude: -23.410897571197015,
                 longitude: -51.93811567002402,
                 latitudeDelta: 0.08,
                 longitudeDelta: 0.08
               }}
               showsMyLocationButton
      />
    </View>
  );
};