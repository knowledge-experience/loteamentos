import * as React from 'react';
import {Alert, Dimensions, ImageBackground, StyleSheet} from 'react-native'
import RnSvg, {Polygon} from 'react-native-svg';
import polygons from "./polygons";

// const {width, height} = Dimensions.get('window')
const {width, height} = {width: 375, height: 667}

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
      <RnSvg height={height} width={width} viewBox={`0 0 ${width} ${height}`}   {...props}>
        {polygons.map(item => <Polygon
          onPress={() => onPressItem(item.id)}
          key={item.id}
          points={item.points}
          fill="rgba(255, 0, 0, 0.2)"
          stroke="lime"
          strokeWidth="1"
        />)}
      </RnSvg>
    </ImageBackground>
  );
};