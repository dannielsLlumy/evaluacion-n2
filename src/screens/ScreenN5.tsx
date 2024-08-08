import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { InputComponents } from './components/InputComponents';
import { styles } from '../theme/apptheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const ScreenN5 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const navigation = useNavigation();

    const handleCompare = () => {
        if (Number(num1) <= Number(num2)) {
            setResult('Número 1 es menor o igual al Número 2');
        } else {
            setResult('Número 1 es mayor que el Número 2');
        }
    };

    return (
        <View style={styles.container}>
            <InputComponents
                value={num1}
                onChangeText={setNum1}
                placeholder="Ingrese el número 1"
                keyboardType="numeric"
            />
            <InputComponents
                value={num2}
                onChangeText={setNum2}
                placeholder="Ingrese el número 2"
                keyboardType="numeric"
            />
            <Button title="<=" onPress={handleCompare} />
            <Text style={styles.result}>{result}</Text>
            <Button title="INICIO"
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenN1' }))} />
            <Text style={styles.title}>"BOTON PARA IR A LA PANTALLA DE INICIO"</Text>
        </View>
    );
};