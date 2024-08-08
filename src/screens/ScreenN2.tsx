import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View, Image } from 'react-native'
import { styles } from '../theme/apptheme';

export const ScreenN2 = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_pringles.png?width=650&name=logo_famoso_pringles.png' }} style={styles.image} />
            <Text style={styles.title}>BOTON PARA IR A LA PANTALLA DE "MAYOR O IGUAL"</Text>
            <Button title="MAYOR O IGUAL"
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenN3' }))} />
        </View>
    )
}
