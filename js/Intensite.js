import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class Intensite extends Component {
  static navigationOptions = {
    title: 'Intensité',
  };
  render() {
    let pic = {
      uri: 'https://www.echosciences-grenoble.fr/uploads/body_image/attachment/1005167449/th.jpg',
    };
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Perso')}
            title="Intensité"
          />
        </View>
        <View style={{ borderWidth: 3, margin: 5, flex: 0.75 }}>
          <Text style={{ textAlign: "center", flex: 1 }}>Vous cherchez les bières les plus fortes, les moins chères et le gout importe peu</Text>
        </View>
        <View style={{ flex: 1.75 }}>
          <Image source={pic} style={{ width: 150, height: 150, margin: 10, marginLeft: 150, resizeMode: "contain" }} />
        </View>
        <View style={{ margin: 5, marginLeft: 50, textAlign: "center", flex: 3 }}>
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
          <View style={{ textAlign: "center", marginTop: 5, flex: 1 }}>
            <Text style={{ flex: 0.5 }}>"La bières c'est de l'eau"</Text>
            <Text style={{ flex: 0.5 }}>"Soirée entre fauchés"</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  buttonContainer: {
    flex: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
})
