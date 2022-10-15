import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RNCamera } from 'react-native-camera';

import ItemPerfume from '../Components/ItemPerfume';

import Database from '../Database/Database';
import Perfume from '../Models/Perfume';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '*****',
      descrição: '*****',
      preco: 0,
      imagem: ''
    }
  }

  CadastrarBanco = (nome, descricao, preco, imagem) => {
    const banco = new Database();
    const perfume = new Perfume(null, nome, descricao, preco, imagem)
    banco.Inserir(perfume);
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({imagem: data.uri})
    }
  };

  render() {
    return (
      <ScrollView style={styles.form}>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ nome: valor }) }} placeholder='Digite o nome...' />
          <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ descricao: valor }) }} placeholder='Digite a descrição...' />
          <TextInput style={styles.txtOpcoes} onChangeText={(valor) => { this.setState({ preco: valor }) }} placeholder='Digite o preço...' />
        </View>

        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
        </View>

        <View style={styles.botao}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Text style={{ fontSize: 14 }}> Tirar Foto </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.CadastrarBanco(this.state.nome, this.state.descricao, this.state.preco, this.state.imagem)}>
            <Text style={styles.cadastro}>CADASTRAR</Text>
          </TouchableOpacity>
        </View >

        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center' }}>O perfume será cadastrado com as seguintes informações: </Text>
          <ItemPerfume
            nome={this.state.nome}
            descricao={this.state.descricao}
            preco={this.state.preco}
            imagem={this.state.imagem}
          />


        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#cbf0c9'

  },
  txtOpcoes: {
    color: 'black',
    fontWeight:'bold',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#f5ebeb'
  },
  cadastro: {
    backgroundColor: '#28bf76',
    textAlign: 'center',
    borderRadius: 50,
    width: 150,
    padding: 10,
    margin: 5,
    color: 'black',
    fontWeight: 'bold'
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1,
    marginTop: 100
  },

  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  preview: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})