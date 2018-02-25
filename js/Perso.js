import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
const data = [
    {
        Nom: "3 Monts",
        Couleur: "noir",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "rouge",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "orange",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },
    {
        Nom: "3 Monts",
        Couleur: "violet",
        url: ""
    },

];
const type = [
    {
        type: "Bière de garde"
    },
    {
        type: "Bière Rousse"
    },
    {
        type: "Bière Brune"
    },
];
const _renderItem = ({ item }) => <Text>{item.Nom}</Text>;

export default class Perso extends React.Component {
    static navigationOptions = {
        title: 'Profils Choisi',
    };
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    render() {
        let PicQualite = {
            uri: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F03%2Farcher_0.jpg%3Fw%3D612&w=1000&q=85'
        };

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10 }}>Distance Maximum d'achat</Text>
                    <Text style={{}}>Qualité Intensité</Text>
                </View>
                <View>
                    <Text style={{ borderBottomWidth: 5 }}>Bière de garde</Text>
                    <FlatList horizontal data={this.state.data} renderItem={_renderItem} />
                </View>
                <View>
                    <Text style={{ borderBottomWidth: 5 }}>Bière Rousse</Text>
                    <FlatList horizontal data={this.state.data} renderItem={_renderItem} />
                </View>
                <View>
                    <Text style={{ borderBottomWidth: 5 }}>Bière Brune</Text>
                    <FlatList horizontal data={this.state.data} renderItem={_renderItem} />
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
        //alignItems: 'center',
        //margin: 20,
        flexDirection: 'column',
    },
    buttonContainer: {
        width: "40%",
        margin: 10,
    },
    picture: {
        height: 50, margin: 2, resizeMode: "contain"

    }
})
