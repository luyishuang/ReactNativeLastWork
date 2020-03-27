//tsx

import React, { Component } from 'react'
import { View, Text } from 'react-native'

//声明变量
const str = 'abc';
let num: number = 300;

// let arr:Array<string> = ['1','2','3']
let arr: string[] = ['aaa', 'bbb']

// let obj:object = {name:'zhangsan'}
let obj:{name:string} = {name:'zhangsan'}

//元组
let tupleArr:[string,number,boolean] = ['ss',2,true]

//枚举
// enum lev {one=100,two=200,three};
// let myLev:lev = lev.three;
// console.log(myLev);

// enum week {ri,yi,er};

//any
let a:any = 'any type';

//接口

//属性接口
interface Course{
    title:string,
    intro:string,
    num?:number,//?代表可选可不选
    [propName:string]:any
}

let hybird:Course = {
    title:'hybrid',
    intro:'混合应用开发',
    name:100
}

//函数接口
function fun(pa1:string,pa2:number):boolean{
    return true;
}
fun('12',3);

// interface MyFunc{
//     (params1:string):boolean
// }

// let fun:MyFunc = function(pa:string){
//     return true;
// }


//类接口
interface Person{
    name:string,
    age:number
}

interface User extends Person{
    pwd:string
}
//implements实现
class User1 implements User{
    name = 'zhangsan';
    age = 20;
    pwd = '1234566'
}
console.log(new User1())

//继承(extends)
//类实现接口
//接口继承接口
//接口继承类

interface User2 extends User1{
    work:string
}

// let user:User2 = {

// }

interface Props{
    name:string
}

export default class Myts extends Component<Props>{
    render() {
        return (
            <View>
                <Text
                    style={{ fontSize: 20 }}
                >
                    textInComponent{arr}{obj.name}
                </Text>
            </View>
        )
    }
}
