import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Database from '../Database/Database';
import Perfume from '../Models/Perfume';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: 'EM BRANCO',
        descrição: 'EM BRANCO',
        Preço: 0,
        imagem: ''
    }
    //this.CadastrarBanco('Batmóvel', 'HotWheels', 2005, 'https://cf.shopee.com.br/file/dd9bfd306cbaa926a7b23f6d568cd103')
  }

  CadastrarBanco = (nome, descricao, preco, imagem) => {
    const banco = new Database();
    const perfume = new Perfume(null, nome, descricao, preco, imagem)
    banco.Inserir(perfume);
  }

  render() {
    return(
      <View>
        <TextInput onChangeText={ (valor) => {this.setState({nome: valor})}} placeholder='Digite o nome...' />
        <TextInput onChangeText={ (valor) => {this.setState({descricao: valor})}} placeholder='Digite a descrição...' />
        <TextInput onChangeText={ (valor) => {this.setState({preco: valor})}}placeholder='Digite o preço...' />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.CadastrarBanco(this.state.nome, this.state.descricao, this.state.preco, this.state.imagem)}>
                <Text style={{ backgroundColor: 'purple', width: 150, textAlign: 'center',padding: 10, margin: 5, color: 'white', borderRadius: 50 }}>Cadastrar</Text>
            </TouchableOpacity>
            <Text></Text>
        </View>

        <View>
            <Text>O perfume será cadastrado com os seguintes dados:</Text>
            <Text>Nome: {this.state.modelo}</Text>
            <Text>Descrição: {this.state.marca}</Text>
            <Text>Preço: {this.state.ano}</Text>
        </View>
      </View>
    )    
  }
}