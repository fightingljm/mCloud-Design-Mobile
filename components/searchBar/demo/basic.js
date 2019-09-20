import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../..'

export default () => (
    <View style={styles.warp}>
        <Text style={styles.title}>
            未输入状态
        </Text>
        <SearchBar type="radius" placeholder="搜索" />
        <Text style={styles.title}>
            输入中状态
        </Text>
        <SearchBar type="radius" value="打卡助手" />
        <Text style={styles.title}>
            输入结束状态
        </Text>
        <SearchBar type="radius" value="打卡助手" />
        <Text style={styles.title}>
            未输入状态
        </Text>
        <SearchBar placeholder="搜索" />
        <Text style={styles.title}>
            输入结束状态
        </Text>
        <SearchBar value="打卡助手" />
    </View>
)

const styles = StyleSheet.create({
    warp: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
})
