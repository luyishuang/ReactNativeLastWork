// 编写自定义组件 ImageBg，实现背景图功能

import React, { Component } from 'react'
import { View, ImageBackground, Text , Image ,StyleSheet} from 'react-native'

export default class ImageBg extends Component {
    render() {
        let {style,source,children} = this.props;
        return (
            <View style={style}>
                <Image 
                    style={[styles.absoluteImg,style]} 
                    source={source} 
                />
                {children}
            </View>
        )
    }
}
// 在rn中，每个组件都默认设置了position:relative
const styles = StyleSheet.create({
    absoluteImg:{
        position:"absolute",
        left:0,
        top:0
    }
})
