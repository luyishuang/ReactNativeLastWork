import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class MsgDetail extends Component {
    render() {
        return (
            <View>
                <Button title="返回Msg页面" onPress={()=>Actions.pop()}></Button>
                    <Text>消息详情id:{this.props.id}</Text>
            </View>
        )
    }
}
