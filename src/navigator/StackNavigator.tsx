import { ScreenN1 } from '../screens/ScreenN1';
import { ScreenN2 } from '../screens/ScreenN2';
import { ScreenN3 } from '../screens/ScreenN3';
import { ScreenN4 } from '../screens/ScreenN4';
import { ScreenN5 } from '../screens/ScreenN5';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
    Screen1: undefined;
    ScreenN2: undefined;
    ScreenN3: undefined;
    ScreenN4: undefined;
    ScreenN5: undefined;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ScreenN1" component={ScreenN1} />
            <Stack.Screen name="ScreenN2" component={ScreenN2} />
            <Stack.Screen name="ScreenN3" component={ScreenN3} />
            <Stack.Screen name="ScreenN4" component={ScreenN4} />
            <Stack.Screen name="ScreenN5" component={ScreenN5} />
        </Stack.Navigator>

    )
}
