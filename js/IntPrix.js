import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

export default class IntPrix extends Component {
  static navigationOptions = {
    title: 'Intensité Prix',
  };
  render() {
    let pic = {
      uri: 'https://i.pinimg.com/originals/a6/eb/58/a6eb5818e89621e8c0d1996979003eef.jpg',
    };
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Perso')}
            title="Intensité/Prix"
          />
        </View>
        <View style={{ borderWidth: 3, margin: 5, flex: 0.75 }}>
          <Text style={{ textAlign: "center", flex: 1 }}>Vous cherchez les bières les plus fortes,les moins chères et tout en aillant un bon gout</Text>
        </View>
        <View style={{ flex: 1.75 }}>
          <Image source={pic} style={{ width: 150, height: 150, margin: 10, marginLeft: 150, resizeMode: "contain" }} />
        </View>
        <View style={{ margin: 5, marginLeft: 50, textAlign: "center", flex: 3 }}>
          <Text>Qualité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 75, height: 50, backgroundColor: 'red' }} />
          </View>
          <Text>Prix</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 60, height: 50, backgroundColor: 'green' }} />
          </View>
          <Text>Intensité</Text>
          <View style={{ width: 256, height: 56, borderWidth: 3 }}>
            <View style={{ width: 200, height: 50, backgroundColor: 'blue' }} />
          </View>
          <View style={{ textAlign: "center", marginTop: 5, flex: 1 }}>
            <Text style={{ flex: 0.5 }}>"Rien ne vaut un bon bar!"</Text>
            <Text style={{ flex: 0.5 }}>"Soirée entre potes"</Text>
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
