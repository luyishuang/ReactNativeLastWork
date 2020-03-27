//创建一个组件（新建文件）ShowMyName，返回Hello + 名字，名字在调用的时候传入

import React, { Component } from 'react'
import { View, Text } from 'react-native'

const ShowMyName = (props) => {
    return (
        <View>
            <Text>hello {props.name}</Text>
        </View>
    )
}

// export default class ShowMyName extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>hello {this.props.name}</Text>
//             </View>
//         )
//     }
// }

export default ShowMyName;
