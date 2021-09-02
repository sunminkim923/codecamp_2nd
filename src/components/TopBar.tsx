import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>오산가:</Text>
      <Text style={styles.text}>오늘도 산책 가까?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    // height: 100,
    // flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 150,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default TopBar;
