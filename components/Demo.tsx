import React, { Component } from 'react'
import { Text } from 'react-native'
import Myts from './Myts'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <Text>textInComponent</Text>
                <Myts name={'122'}/>
            </div>
        )
    }
}
