---
id: 
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
    View,
} from 'react-native';
import { SearchBar } from 'mCloud-mobile';

export default class Example extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
                
            </View>
        )
    }
}

```



## SearchBar Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type | 默认样式（通栏）、圆角样式 | String `default | radius`   |  default |
| defaultValue | 默认值 | String   |  无 |
| value | 当前值 | String   |  无 |
| placeholder | 输入文本之前呈现的的提示信息 | String   |  无 |
| renderSearch | 自定义搜索放大镜 | ReactNode   |  `<Image source={require('./assets/search-small.png')} />` |
| renderClear | 自定义清除按钮 | ReactNode   |  `<Image source={require('./assets/clear.png')} />` |
| onSubmit | submit 事件的回调 | (val: String): void   |  无 |
| onChange | change 事件的回调 | (val: String): void   |  无 |
| onFocus | focus 事件的回调 | (val: String): void   |  无 |
| onBlur | blur 事件的回调 | (val: String): void   |  无 |
| onClear | 清除事件的回调 | (val: String): void   |  无 |



