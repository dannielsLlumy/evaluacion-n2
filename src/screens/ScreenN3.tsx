import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View, Image } from 'react-native'
import { styles } from '../theme/apptheme';

export const ScreenN3 = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/89/24/75/8924750a633921d0e7b88b2e31caecf0.png' }} style={styles.image} />
            <Text style={styles.title}>BOTON PARA IR A LA PANTALLA DE "MAYOR O IGUAL"</Text>
            <Button title="MENOR O IGUAL"
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenN4' }))} />
        </View>
    );
};