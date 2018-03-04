import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

const data = [
    {
        type: "Biere de garde",
        ListBiere: [
            {
                Biere: "test",
                couleur: "red",
                uri: 'http://www.bouteille-de-biere.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/1/21287-biere-kronembourg-blonde-25cl.jpg'
            },
            {
                Biere: "test",
                couleur: "orange",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "green",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
        ]
    },
    {
        type: "Bière Rousse",
        ListBiere: [
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
        ]
    },
    {
        type: "Bière Brune",
        ListBiere: [
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            }, {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
            {
                Biere: "test",
                couleur: "",
                uri: "#"
            },
        ]
    },
]


_renderItem = ({ item }) => (
    <View>
        <Text style={{ borderBottomWidth: 5 }}>{item.type}</Text>
        <FlatList horizontal data={item.ListBiere} renderItem={_list} />
    </View>
);

_list = ({ item }) => (
    <View>
        <View style={{ backgroundColor: item.couleur, height: 5, width: 5 }}></View>
        <Image source={item} style={{ width: 50, height: 50 }} />
        <Text style={{ margin: 20 }}>{item.Biere}</Text>
    </View>
);


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

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10 }}>Distance Maximum d'achat</Text>
                    <Text style={{}}>Qualité Intensité</Text>
                </View>
                <View>
                    <FlatList data={this.state.data} renderItem={_renderItem} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
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
