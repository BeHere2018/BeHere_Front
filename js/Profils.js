import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Profils extends React.Component {
    static navigationOptions = {
        title: 'Profiles',
    };
    render() {
        let picQualite = {
            uri: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F03%2Farcher_0.jpg%3Fw%3D612&w=1000&q=85'
        };
        let picIntensite = {
            uri: 'https://pre00.deviantart.net/61d6/th/pre/i/2017/258/6/3/bojack_horseman__season_4_review_by_ryanech0-dbnhpy1.jpg'
        };
        let picIntPrix = {
            uri: 'https://i.pinimg.com/originals/a6/eb/58/a6eb5818e89621e8c0d1996979003eef.jpg'
        };
        let picQuaPrix = {
            uri: 'https://cdn20.patchcdn.com/users/38195/20171023/013718/styles/T800x600/public/processed_images/simpsons_homer_moe_fox-1508778948-2018.jpg'
        };
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.buttonContainer}>
                        <Image source={picIntensite} style={styles.picture} />
                        <Button
                            onPress={() => this.props.navigation.navigate('Intensite')}
                            title="Intensité"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Image source={picQualite} style={styles.picture} />
                        <Button
                            onPress={() => this.props.navigation.navigate('Qualite')}
                            title="Qualité"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.buttonContainer}>
                        <Image source={picQuaPrix} style={styles.picture} />
                        <Button
                            onPress={() => this.props.navigation.navigate('QuaPrix')}
                            title="Qualité Prix"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Image source={picIntPrix} style={styles.picture} />
                        <Button
                            onPress={() => this.props.navigation.navigate('IntPrix')}
                            title="Intensité Prix"
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('ProfilSwap')}
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
        flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor: 'skyblue',
        //borderWidth: 5,
        alignItems: 'center',
        //margin: 20
    },
    buttonContainer: {
        width: "40%",
        margin: 10,
    },
    picture: {
        height: "35%", margin: 10, resizeMode: "contain"

    }
})
