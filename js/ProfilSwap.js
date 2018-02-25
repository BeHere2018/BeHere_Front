import React, { Component } from "react";
import { FlatList, Text } from "react-native";
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

export default class ProfilSwap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    render() {
        return (
            //<View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                horizontal
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        <rowData.Url />
                    );
                }}
                keyExtractor={(item, index) => index}
            />
            //  </View>
        );
    }
}