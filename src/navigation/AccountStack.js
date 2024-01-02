import { createStackNavigator } from '@react-navigation/stack';
import { UserGuest } from '../screens/Account/UserGuest/UserGuest';

const Stack = createStackNavigator();

export function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="account" 
                component={UserGuest} 
                options={{ title: "Cuenta" }}
            />
        </Stack.Navigator>
    )
}