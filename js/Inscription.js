import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, TextInput } from 'react-native';

export default class Inscription extends Component {
    static navigationOptions = {
        title: 'Inscription',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Text> Mail</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Taper votre Mail"
                    //onChangeText={(text) => this.setState({ text })}
                    />
                    <Text> Identifiant</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Taper votre identifiant"
                    //onChangeText={(text) => this.setState({ text })}
                    />
                    <Text> Mot de passe</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Taper votre mot de passe"
                        secureTextEntry={true}
                        maxLength={20}
                    //onChangeText={(text) => this.setState({ text })}
                    />
                    <Text> Confirmation</Text>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Confirmer votre mot de passe"
                        secureTextEntry={true}
                        maxLength={20}
                    //onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Connexion')}
                        title="Inscription"
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
    },
    buttonContainer: {
        margin: 20
    },
    des: {
        margin: 10
    }
})