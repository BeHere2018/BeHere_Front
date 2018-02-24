import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class Intensite extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    let pic = {
      uri: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F03%2Farcher_0.jpg%3Fw%3D612&w=1000&q=85'
    };
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Qualité"
          />
        </View>
        <View style={{ borderWidth: 3, margin: 10 }}>
          <Text>Vous voulez déguster les meilleurs bières possibles</Text>
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
            <Text>"Rien ne vaut une bière de bonne facture"</Text>
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
