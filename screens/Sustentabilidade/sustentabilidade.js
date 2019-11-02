
import React, {Component} from './node_modules/react';
import { View, Text, ScrollView, Button, TouchableOpacity,  Platform, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from './constants/dimentions';

export default class App extends Component {
  render() {
    return (
      
      <ScrollView style={styles.tela}>
          <Text style={styles.nomedaempresa}>SUSTENTABILIDADE </Text>
          <Text style={styles.texto}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Vitae nunc sed velit dignissim sodales. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Bibendum est ultricies integer quis. Scelerisque varius morbi enim nunc faucibus a pellentesque. Felis imperdiet proin fermentum leo vel. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Nulla malesuada pellentesque elit eget gravida cum sociis. At in tellus integer feugiat scelerisque varius morbi enim nunc. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Diam vel quam elementum pulvinar etiam non. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris commodo quis imperdiet. Sit amet aliquam id diam maecenas.</Text>
      </ScrollView>
      

      
    );
    
  }
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#FAF0E6'
  },

  nomedaempresa: {
    fontSize: 30,
    textAlign: 'center',
    marginTop:20,
    color:'#3CB371',
    fontFamily: 'sans-serif'
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    color:'balck',
    fontFamily: 'sans-serif-light'
  }

});
