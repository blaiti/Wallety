import React from 'react';
import {
  StyleSheet,
  View, 
  Text
} from 'react-native';
import { Colors, Typography } from '../../styles';

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

const renderThirdLayer = (percent) => {
  if(percent > 50){
    return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45) ]}></View>
  }else{
    return <View style={styles.offsetLayer}></View>
  }
}

const CircularProgress = ({percent}) => {
  let firstProgressLayerStyle;
  if(percent > 50){
      firstProgressLayerStyle = propStyle(50, -135);
  }else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return(
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderWidth: 15,
    borderRadius: 70,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    width: 140,
    height: 140,
    borderWidth: 15,
    borderRadius: 70,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: Colors.BLACK,
    borderTopColor: Colors.BLACK,
    transform:[{rotateZ: '-135deg'}]
  },
  secondProgressLayer:{
    width: 140,
    height: 140,
    position: 'absolute',
    borderWidth: 15,
    borderRadius: 70,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: Colors.BLACK,
    borderTopColor: Colors.BLACK,
    transform: [{rotateZ: '45deg'}]
  },
  offsetLayer: {
    width: 140,
    height: 140,
    position: 'absolute',
    borderWidth: 15,
    borderRadius: 70,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: Colors.WHITE,
    borderTopColor: Colors.WHITE,
    transform:[{rotateZ: '-135deg'}]
  }
});

export default CircularProgress;