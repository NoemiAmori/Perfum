import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home';
import Cadastro from './src/Screens/Cadastro';
import Sobre from './src/Screens/Sobre';
import Listagem from './src/Screens/Listagem';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Página Inicial" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Listagem" component={Listagem}/>
          <Stack.Screen name="Sobre" component={Sobre} />


        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}