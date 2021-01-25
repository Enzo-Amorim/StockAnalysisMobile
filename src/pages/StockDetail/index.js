import React from 'react'
import { View, Text } from 'react-native'

export default function StockDetail({ route, navigation }) {
    const { symbol } = route.params;

    return (
        <View>
            <Text>{symbol}</Text>
        </View>
    )
}
