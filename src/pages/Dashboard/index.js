/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useSelector, useDispatch } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Stock from '../../components/Stock';
import styles from './style'

Icon.loadFont();

export default function Dashboard({ navigation }) {
    const [newStock, setNewStock] = useState('');
    const [storedStocks, setStoredStocks] = useState([])

    const stocks = useSelector(state => state.stocks);
    const dispatch = useDispatch()

    useEffect(() => {
        async function initialCheck() {
            AsyncStorage.getItem('stocks').then(storagedStocks => {
                if (storagedStocks) {
                    const stockArray = storagedStocks.split(',').map(stock => stock.trim());
                    dispatch({ type: 'REMOVE_ALL' })
                    stockArray.map((stock) => {
                        dispatch({ type: 'ADD_STOCK', stock: stock })
                        console.log('globalizando ' + stock)
                    })
                } else {
                    console.log("ta vazio")
                }
            });
        }
        initialCheck()
    }, [])

    async function handleSubmit() {
        if (newStock === '') {
            Alert.alert("Digite algo valido!!!")
        } else {
            dispatch({ type: 'ADD_STOCK', stock: newStock })
            await AsyncStorage.getItem('stocks').then(async storagedStocks => {
                console.log('handlesubmit ' + storagedStocks)
                if (storagedStocks == null) {
                    await AsyncStorage.setItem('stocks', newStock)
                } else {
                    await AsyncStorage.setItem('stocks', storagedStocks + `, ${newStock}`)
                }
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite suas ações"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={newStock}
                    onChangeText={setNewStock}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Icon style={{ marginLeft: -2, marginTop: -3 }} name="add" size={50} color="#FFF" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} bounces={true} indicatorStyle={'white'}>
                {stocks.length === 0 ? <Text style={{ color: '#5731E0', marginTop: 60, fontSize: 18 }}>Aguardando você digitar alguma ação</Text> : stocks == 'null' ? <Text style={{ color: '#5731E0', marginTop: 60 }}>Aguardando você digitar alguma ação</Text> : stocks.map((stock, idx) => <Stock key={idx} stock={stock} navigation={navigation} />, console.log(stocks))}
            </ScrollView>
        </SafeAreaView>
    );
}