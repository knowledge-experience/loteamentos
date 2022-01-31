import * as React from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native'
import MapView, {Polygon} from 'react-native-maps';
import polygons from "./polygons";

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
  const onPressItem = (itemId: string) => {
    Alert.alert('Polygon pressed', itemId)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
               provider='google'
               initialRegion={{
                 latitude: -23.412897571197015,
                 longitude: -51.93511567002402,
                 latitudeDelta: 0.008,
                 longitudeDelta: 0.008
               }}
               showsMyLocationButton
      >
        {
          polygons.map(item => <Polygon key={item.id} coordinates={item.coordinates}
                                        tappable
                                        onPress={() => onPressItem(item.id)}/>)
        }

      </MapView>

    </View>
  );
};