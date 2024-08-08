

import React from 'react'
import { Button, Image, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/apptheme';

interface Props extends StackScreenProps<any, any> { }

export const ScreenN1 = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png' }} style={styles.image} />
            <Text style={styles.title}>"BIENVENIDO USUARIO/USUARIO A ESTA APLICACIÓN!"</Text>
          <View style={[styles.buttonContainer, styles.buttonImage1]}>
            <Button 
              title="Imagen 1" 
              onPress={() => navigation.navigate('ScreenN2')} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonImage2]}>
            <Button 
              title="Imagen 2" 
              onPress={() => navigation.navigate('ScreenN3')} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonGreaterOrEqual]}>
            <Button 
              title="Mayor o Igual" 
              onPress={() => navigation.navigate('ScreenN4')} 
            />
          </View>
          <View style={[styles.buttonContainer, styles.buttonLessOrEqual]}>
            <Button 
              title="Menor o Igual" 
              onPress={() => navigation.navigate('ScreenN5')} 
            />
          </View>
        </View>
      );
    };
    