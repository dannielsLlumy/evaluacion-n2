import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../../theme/apptheme';
interface InputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: 'default' | 'numeric';
}

export const InputComponents = ({ value, onChangeText, placeholder, keyboardType = 'default' }: InputFieldProps) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    );
};
