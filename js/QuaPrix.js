import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class QuaPrix extends Component {
  static navigationOptions = {
    title: 'Qualite Prix',
  };
  render() {
    let pic = {
      uri: 'https://cdn20.patchcdn.com/users/38195/20171023/013718/styles/T800x600/public/processed_images/simpsons_homer_moe_fox-1508778948-2018.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Qualité/Prix"
          />
        </View>
        <View style={{ borderWidth: 3, margin: 10 }}>
          <Text>Vous cherchez des bières de qualité avec un prix abordable</Text>
        </View>
        <View>
          <Image source={pic} style={{ width: 200, height: 200, margin: 10, marginLeft: 100, resizeMode: "contain" }} />
        </View>
        <View style={{ margin: 20, marginLeft: 50 }}>
          <Text>Qualité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 175, height: 50, backgroundColor: 'red' }} />
          </View>
          <Text>Prix</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 75, height: 50, backgroundColor: 'green' }} />
          </View>
          <Text>Intensité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 100, height: 50, backgroundColor: 'blue' }} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text>"Rien ne vaut un bon bar!"</Text>
            <Text>"Soirée entre potes"</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    //borderWidth: 5,
    //alignItems: 'center'
    //margin: 20
  },
  buttonContainer: {
    margin: 20
  },
  des: {
    margin: 10
    //alignItems:'center',
  }
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('BehereProject', () => Intensite);
