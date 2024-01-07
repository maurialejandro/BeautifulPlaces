import { createStackNavigator } from '@react-navigation/stack';
import { UserGuest } from '../screens/Account/UserGuest/UserGuest';
import { Login } from '../screens/Account/Login/Login';
import { Register } from '../screens/Account/Register/Register';

const Stack = createStackNavigator();

export function AccountStack(){
    return(
        <Stack.Navigator
            screenOptions={{

                cardStyle: { backgroundColor: "#9BB8CD" },
                headerStyle: {
                    backgroundColor: "#F3B664",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }
            }}
        >
            <Stack.Screen 
                name="account" 
                component={UserGuest} 
                options={{ title: "Cuenta" }}

            />
            <Stack.Screen 
                name="login"
                component={Login}
                options={{ title: "Login" }}
            />
            <Stack.Screen 
                name="register"
                component={Register}
                options={{ title: "Register" }}
            />
        </Stack.Navigator>
    )
}