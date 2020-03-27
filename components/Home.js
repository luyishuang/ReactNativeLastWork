import React, { Component } from 'react'
import { View, Animated, Easing, ActivityIndicator, Image, Text, FlatList, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import SplashScreen from 'react-native-splash-screen'
import { MessageBarManager } from 'react-native-message-bar';
import { Router, Actions, Overlay, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Myts from './Myts';

const { width } = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


export default class Home extends Component {
    constructor() {
        super();
        let data = [];
        for (var i = 0; i < 10; i++) {
            data.push({ tit: i, key: i });
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl: ''
        }
    }

    takephoto = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,//是否裁剪
        }).then(image => {
            this.setState({ imageUrl: { uri: image.path } })
        });
        // ImagePicker.showImagePicker(options, (response) => {
        //     if (response.didCancel) {
        //       return;
        //     } else if (response.error) {
        //       console.log('Error:', response.error);
        //     } else if (response.customButton) {
        //       console.log('custom:', response.customButton);
        //     } else {

        //       const source = { uri: response.uri };
        //       this.setState({
        //         imageUrl: source,
        //       });
        //     }
        //   });
    }
    zoom = () => {
        Animated.timing(this.state.width, {
            toValue: 200,
            easing: Easing.elastic()
        }).start()
    }
    render() {
        console.log('home')
        return (
            <View style={{ flex: 1 }}>
                <Myts />
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                <Image source={this.state.imageUrl} style={{ width: 200, height: 200 }} />
                <WebView source={{ uri: 'https://www.baidu.com' }} />

                <ActivityIndicator size='large' color='red' />
                <Button
                    onPress={() => { this.zoom() }}
                    style={styles.btn}
                >
                    变大
                </Button>
                <Button
                    onPress={() => { this.takephoto() }}
                    style={styles.btn}
                >
                    拍照
                </Button>
                <Animated.View style={{
                    width: this.state.width,
                    height: 200,
                    backgroundColor: 'red'
                }}>

                </Animated.View>
                {/* <FlatList
                    ListHeaderComponent={
                    <Button 
                    style={styles.btn}
                    onPress={()=>{
                        MessageBarManager.showAlert({
                            title:'提示标题',
                            message:'具体的信息',
                            alertType:'info',
                            stylesheetInfo:{backgroundColor:'red'}
                        })
                    }}
                    >头部按钮</Button>
                }
                    ListFooterComponent={<Text>尾部</Text>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => <View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                /> */}
                {/* <ScrollView 
                    pagingEnabled={true} 
                    horizontal={true}
                    style={{height:300}}
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide: {
        width: width * 0.4,
        height: 300,
        marginLeft: width * 0.07,
        marginTop: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        textAlignVertical: 'center',
        color: '#fff'
    }
})