import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class Intensite extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    let pic = {
      uri: 'https://www.echosciences-grenoble.fr/uploads/body_image/attachment/1005167449/th.jpg',
      //uri:'https://pre00.deviantart.net/61d6/th/pre/i/2017/258/6/3/bojack_horseman__season_4_review_by_ryanech0-dbnhpy1.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Intensité"
          />
        </View>
        <View style={{ borderWidth: 3, margin: 10 }}>
          <Text>Vous cherchez les bières les plus fortes, les moins chères et le gout importe peu</Text>
        </View>
        <View>
          <Image source={pic} style={{ width: 200, height: 200, margin: 10, marginLeft: 100, resizeMode: "contain" }} />
        </View>
        <View style={{ margin: 20, marginLeft: 50 }}>
          <Text>Qualité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
          </View>
          <Text>Prix</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 25, height: 50, backgroundColor: 'green' }} />
          </View>
          <Text>Intensité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 250, height: 50, backgroundColor: 'blue' }} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text>"La bières c'est de l'eau"</Text>
            <Text>"Soirée entre fauchés"</Text>
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
