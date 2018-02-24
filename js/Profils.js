import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Profils extends React.Component {
    render() {
        let pic = {
            uri: 'https://www.echosciences-grenoble.fr/uploads/body_image/attachment/1005167449/th.jpg',
            //uri:'https://pre00.deviantart.net/61d6/th/pre/i/2017/258/6/3/bojack_horseman__season_4_review_by_ryanech0-dbnhpy1.jpg'
        };
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Intensite')}
                        title="Intensité"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Qualite')}
                        title="Qualité"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('QuaPrix')}
                        title="Qualité Prix"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('IntPrix')}
                        title="Intensité Prix"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('IntPrix')}
                        title="Présentation des Profils"
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
