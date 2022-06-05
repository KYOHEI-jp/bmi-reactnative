import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

class BMIcalculator extends Component {
  state = {
    height: '',
    weight: '',
    bmi: '',
    BmiResult: '',
 }
 handleHeight = (text) => {
    this.setState({ height: text })
 }
 handleWeight = (text) => {
    this.setState({ weight: text })
 }
 calculate = (height, weight) => {
    //calculation
    var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result })
    if(result<18.5){
       this.setState({BmiResult:'Underweight'})
    }
    else if(result>=18.5&&result<25){
       this.setState({BmiResult:'Normal weight'})
    }
    else if(result>=25&&result<30){
       this.setState({BmiResult:'Overweight'})
    }
    else if(result>=30){
       this.setState({BmiResult:'Obese'})
    }
    else{
       alert('Incorrect Input!');
       this.setState({BmiResult:''})
    }
 }
 