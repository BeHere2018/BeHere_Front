import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "react-native-elements";
import Intensite from './Intensite'
import IntPrix from './IntPrix'
import QuaPrix from './QuaPrix'
import Qualite from './Qualite'

const data = [
    {
        Url: Intensite,
        title: "Intensité"
    },
    {
        Url: IntPrix,
        title: "IntPrix"
    },
    {
        Url: QuaPrix,
        title: "QuaPrix"
    },
    {
        Url: Qualite,
        title: "Qualite"
    },

];

_renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 10 }}>
        <item.Url style={{ flex: 1 }} />
    </View>
);

export default class ProfilSwap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    horizontal
                    data={this.state.data}
                    renderItem={_renderItem}
                />
            </View>

        );
    }
}