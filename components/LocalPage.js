import React, { Component } from 'react'
import { View, Text, AsyncStorage, Button, ScrollView,StatusBar } from 'react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';

export default class LocalPage extends Component {
    constructor() {
        super();
        this.state = {
            tits: []
        }
    }
    storeData = async () => {
        await AsyncStorage.setItem('userName', 'helloworld',
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('userName')
            .then((res) => console.log(res))
    }
    getTitle = () => {
        fetch('https://cnodejs.org/api/v1/topics')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    tits:res.data
                })
            })

    }
    render() {
        return (
            <View>
                <ScrollView>
                    <StatusBar backgroundColor='transparent' translucent={true}/>
                    <Button title='存储' onPress={this.storeData} />
                    <Button title='获取' onPress={this.getData} />
                    <Button title='请求title' onPress={this.getTitle} />
                    {
                        this.state.tits.map((item) => (
                            <Text style={{fontSize:15}}>{item.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
