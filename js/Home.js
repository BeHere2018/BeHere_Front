import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profils from './Profils'
import Intensite from './Intensite'
import IntPrix from './IntPrix'
import QuaPrix from './QuaPrix'
import Qualite from './Qualite'
import Connexion from './Connexion'
import Inscription from './Inscription'
import ProfilSwap from './ProfilSwap'
import Perso from './Perso'



//export default 
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        let pic = {
            uri: 'https://www.echosciences-grenoble.fr/uploads/body_image/attachment/1005167449/th.jpg',
        };
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Connexion')}
                        title="Connexion"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Inscription')}
                        title="Inscription"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        //onPress={() => this.props.navigation.navigate('QuaPrix')}
                        title="mot de passe oublié"
                    />
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

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Intensite: {
            screen: Intensite,
        },
        IntPrix: {
            screen: IntPrix,
        },
        Qualite: {
            screen: Qualite,
        },
        QuaPrix: {
            screen: QuaPrix,
        },
        Profils: {
            screen: Profils,
        },
        Connexion: {
            screen: Connexion,
        },
        Inscription: {
            screen: Inscription,
        },
        ProfilSwap: {
            screen: ProfilSwap,
        },
        Perso: {
            screen: Perso
        }
    },
    {
        initialRouteName: 'Home',
    }
);


export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}