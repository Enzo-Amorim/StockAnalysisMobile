/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import { useSelector, useDispatch } from 'react-redux'

import styles from './style';

Icon.loadFont();
import api from '../../services/Api';


export default function Stock({ stock, navigation }) {
    const [stocks, setStocks] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        async function loadStocks() {
            const response = await api.get(`/data/${stock}`);

            setStocks(response.data);
        }

        loadStocks();
    }, [stock]);

    async function handleDelete() {
        dispatch({ type: 'REMOVE_STOCK', stock: stock })
        try {
            await AsyncStorage.getItem('stocks').then(async storagedStocks => {
                const stockArray = storagedStocks.split(',').map(stock => stock.trim());
                const newArray = stockArray.filter(stocks => stocks !== stock)
                await AsyncStorage.setItem('stocks', newArray.toString())
                console.log(newArray.toString())
            })
            Alert.alert(`A ação ${stock} foi excluida com sucesso`);
        } catch (err) {
            Alert.alert('Algo deu errado' + err)
        }
    }
    function handleDetails(symbol) {
        console.log('oi')
        navigation.navigate('Details', { symbol })

    }
    //22
    return (
        <View style={styles.container}>
            <Text style={[styles.fixed, { marginLeft: 12, marginTop: 12 }]}> Ação </Text>
            <Text style={[styles.values, { marginTop: 34, marginLeft: 8 }]}>{stocks.symbol}</Text>
            <Text style={[styles.fixed, { marginLeft: 32, marginTop: 85 }]}>Abertura</Text>
            <Text style={[styles.values, { marginTop: 109, marginLeft: 26 }]}>{stocks.open}</Text>
            <Text style={[styles.fixed, { marginLeft: 32, marginTop: 165 }]}>Fechamento</Text>
            <Text style={[styles.values, { marginTop: 187, marginLeft: 26 }]}>{stocks.close}</Text>
            <Text style={[styles.fixed, { marginLeft: 5, marginTop: 240 }]}>Data:</Text>
            <Text style={[styles.values, { marginLeft: 46, marginTop: 236, fontSize: 18 }]}>{stocks.date}</Text>

            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={handleDelete} style={styles.trash}>
                <Icon style={{ marginLeft: 0, marginTop: 0 }} name="delete" size={35} color="#FFF" />
            </TouchableOpacity>

            <Text style={[styles.fixed, { marginLeft: 165, marginTop: 20 }]}>volume</Text>
            <Text style={[styles.values, { marginLeft: 162, marginTop: 40, fontSize: 20 }]}>{stocks.volume}</Text>
            <Text style={[styles.fixed, { marginLeft: 180, marginTop: 85 }]}>Alta</Text>
            <Text style={[styles.values, { marginTop: 112, marginLeft: 174 }]}>{stocks.high}</Text>
            <Text style={[styles.fixed, { marginLeft: 180, marginTop: 165 }]}>Baixa</Text>
            <Text style={[styles.values, { marginTop: 187, marginLeft: 174 }]}>{stocks.low}</Text>
            <TouchableOpacity style={styles.details} onPress={() => handleDetails(stocks.symbol)}>
                <Icon style={{ marginBottom: 0, marginRight: 0 }} name="arrow-forward" size={35} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
}
