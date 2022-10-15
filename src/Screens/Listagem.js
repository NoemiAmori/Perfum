import React, { Component } from "react";
import { View, Text } from "react-native";

import ItemPerfume from "../Components/ItemPerfume";
import Database from "../Database/Database";

export default class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPerfumes: []
        }

        this.ListarBanco();
    }

    ListarBanco = () => {
        const banco = new Database();
        banco.Listar().then(lista => { this.setState({ listaPerfumes: lista }) })
    }

    ExcluirBanco = (id) => {
        const banco = new Database();
        banco.Remover(id);
        this.ListarBanco();
    }

    render() {
        return (
            <View>
                {
                    this.state.listaPerfumes.map(
                        item => (
                            <ItemPerfume
                                key={item.id}
                                id={item.id}
                                nome={item.nome}
                                descricao={item.descricao}
                                preco={item.preco}
                                imagem={item.imagem}
                                excluir={this.ExcluirBanco}
                            />
                        )
                    )
                }
            </View>
        )
    }
}