import React from 'react'
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native'
import { WithTheme } from '../style'
import SearchBarStyles from './style'

const searchBigImage = require('./assets/search-big.png')
const searchSmallImage = require('./assets/search-small.png')
const clearImage = require('./assets/clear.png')

export default class SearchBar extends React.Component {
    static defaultProps = {
        type: 'default', // default | radius
    }
    constructor(props) {
        super(props)
        let value
        if ('value' in props) {
            value = props.value
        } else if ('defaultValue' in props) {
            value = props.defaultValue
        } else {
            value = ''
        }
        this.state = {
            value,
            focus: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            })
        }
    }
    onSubmit = () => {
        const { value } = this.state
        const { onSubmit } = this.props
        if (onSubmit) {
            onSubmit(value || '')
        }
    }
    onChangeText = (value) => {
        const { onChange } = this.props
        if (!('value' in this.props)) {
            this.setState({ value })
        }
        if (onChange) {
            onChange(value)
        }
    }
    onFocus = (e) => {
        const { onFocus } = this.props
        this.setState({
            focus: true,
        })
        if (onFocus) {
            onFocus(e)
        }
    }
    onBlur = (e) => {
        this.setState({
            focus: false,
        })
        const { onBlur } = this.props
        if (onBlur) {
            onBlur(e)
        }
    }
    onClear = () => {
        this.setState({
            value: '',
        })
        const { onClear } = this.props
        if (onClear) {
            onClear()
        }
    }
    render() {
        const { focus, value } = this.state
        let {
            renderSearch,
            renderClear,
        } = this.props
        const {
            style,
            styles,
            type,
            placeholder,
        } = this.props
        const style_prefix = type === 'radius' ? 'radius_' : 'default_'
        const search_source = type === 'default' ? searchBigImage : searchSmallImage
        return (
            <WithTheme themeStyles={SearchBarStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        renderSearch = (
                            <View style={_styles[`${style_prefix}searchView`]}>
                                {
                                    typeof renderSearch === 'undefined' ? (
                                        <Image
                                            source={search_source}
                                        />
                                    ) : (
                                        renderSearch
                                    )
                                }
                            </View>
                        )
                        renderClear = focus && (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={_styles[`${style_prefix}clearView`]}
                                onPress={this.onClear}
                            >
                                {
                                    typeof renderClear === 'undefined' ? (
                                        <Image
                                            source={clearImage}
                                        />
                                    ) : (
                                        renderClear
                                    )
                                }
                            </TouchableOpacity>
                        )
                        return (
                            <View style={_styles[`${style_prefix}wrapper`]}>
                                <View style={_styles[`${style_prefix}inputWrapper`]}>
                                    <TextInput
                                        style={[_styles[`${style_prefix}input`], style]}
                                        underlineColorAndroid="transparent"
                                        placeholder={placeholder}
                                        value={value}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={this.onSubmit}
                                        onFocus={this.onFocus}
                                        onBlur={this.onBlur}
                                    />
                                </View>
                                {
                                    renderSearch
                                }
                                {
                                    renderClear
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
