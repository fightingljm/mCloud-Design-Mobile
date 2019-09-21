---
id: Checkbox
title: Checkbox
sidebar_label: Checkbox
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
import { Checkbox } from 'mCloud-mobile';

const CheckboxItem = Checkbox.CheckboxItem

export default class Example extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
                
            </View>
        )
    }
}

```



## Checkbox Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked | 是否默认选中 | Boolean   |  无 |
| checked | 当前是否选中 | Boolean   |  无 |
| disabled | 禁用 | Boolean   |  false |
| onChange | change事件触发的回调函数 | (e: Object): void | 无 |


