---
id: SearchBar
title: SearchBar
sidebar_label: SearchBar
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.


## Example

<table>
  
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { SearchBar } from 'mCloud-mobile';

export default class Example extends Component {
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
                    圆角搜索框
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

```



## SearchBar Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultValue | 默认值 | String   |  无 |
| value | 当前值 | String   |  无 |
| placeholder | 输入文本之前呈现的的提示信息 | String   |  无 |
| onSubmit | submit 事件的回调 | (val: String): void   |  无 |
| onChange | change 事件的回调 | (val: String): void   |  无 |
| onFocus | focus 事件的回调 | (val: String): void   |  无 |
| onBlur | blur 事件的回调 | (val: String): void   |  无 |
| onClear | 清除事件的回调 | (val: String): void   |  无 |
| type | 默认样式（通栏）、圆角样式 | String `default | radius`   |  default |
| renderClear | 自定义清除按钮 | ReactNode   |  `<Image source={require('./assets/clear.png')} />` |
| renderSearch | 自定义搜索放大镜 | ReactNode   |  `<Image source={require('./assets/search-small.png')} />` |




