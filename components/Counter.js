//写一个Counter,返回一个数字文本和一个按钮，点击按钮，数字加一

import React, { Component,useState } from 'react'
import { View, Text, Button } from 'react-native'

const Counter = () =>{
    let [num,setNum] = useState(0);
    return (
        <View>
            <Text>{num}</Text>
            <Button onPress={()=>{setNum(num+1)}} title="点击加一"/>
        </View>
    )
}
export default Counter;

// export default class Counter extends Component {
//     constructor(){
//         super();
//         this.state = {
//             num:0
//         }
//     }
//     handle=()=>{
//         this.setState((state)=>{
//             return{
//                 num:++this.state.num
//             }
//         })
//     }
//     render() {
//         return (
//             <View>
//                 <Text>
//                     {this.state.num}
//                 </Text>
//                 <Button onPress={this.handle} title="点击加一" />
//             </View>
//         )
//     }
// }
