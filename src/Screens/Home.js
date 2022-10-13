import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View>
            <Text>Olá, mundo!</Text>

            <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
            <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />

        </View>
    )

}