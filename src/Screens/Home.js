import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View>
            <Text>Olá, mundo!</Text>
            <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Listagem" onPress={() => navigation.navigate('Listagem')} />
            <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
        </View>
    )

}
