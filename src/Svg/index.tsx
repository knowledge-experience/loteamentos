import * as React from 'react';
import {Alert, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import RnSvg, {Polygon} from 'react-native-svg';
import polygons from "./polygons";

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width,
    height,
  }
})
export const Svg: React.FC = (props) => {
  const onPressItem = (itemId: string) => {
    Alert.alert('Polygon pressed', itemId)
  }

  return (
    <ImageBackground style={styles.container} source={require('../../assets/loteamento.jpeg')}>
      <RnSvg height="100%" width="100%" viewBox="0 0 100 100"   {...props}>
        {polygons.map(item => <Polygon
          onPress={() => onPressItem(item.id)}
          key={item.id}
          points={item.points}
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        />)}
      </RnSvg>
    </ImageBackground>
  );
};