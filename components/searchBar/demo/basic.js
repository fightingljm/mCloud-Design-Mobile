import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../..'

export default class SearchBarExample extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '打卡助手',
        }
    }
    render() {
        const { value } = this.state
        return (
            <View style={styles.warp}>
                <Text style={styles.title}>
                    未输入状态
                </Text>
                <SearchBar type="radius" placeholder="搜索" />
                <Text style={styles.title}>
                    初始值
                </Text>
                <SearchBar type="radius" defaultValue="打卡助手" />
                <Text style={styles.title}>
                    通栏搜索框 初始值
                </Text>
                <SearchBar defaultValue="打卡助手" />
                <Text style={styles.title}>
                    搜索
                </Text>
                <SearchBar
                    value={value}
                    placeholder="搜索"
                    onSubmit={(val) => console.log(val)}
                    onCancel={() => this.setState({ value: '' })}
                    onChange={(val) => this.setState({ value: val })}
                />
            </View>
        )
    }
}

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
