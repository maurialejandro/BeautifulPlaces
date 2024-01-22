import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Account/Login/Login';
import { Register } from '../screens/Account/Register/Register';
import { Account } from "../screens/Account/Account";
import {useAuthContext} from "../context/AuthContext";
import {UserLogged} from "../screens/Account/UserLogged/UserLogged";

const Stack = createStackNavigator();

export function AccountStack(){
    const isLogged = useAuthContext();

    return(
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "#9BB8CD" },
                headerStyle: {
                    backgroundColor: "#F3B664",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomWidth: 1,
                    borderColor: "#000000",
                    borderStartWidth: 1,
                    borderEndWidth: 1,
                    borderStyle: "solid",
                }
            }}
        >
            { isLogged ? (
                <>
                    <Stack.Screen
                        name="logged"
                        component={UserLogged}
                        options={{ title: "Logged" }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="account"
                        component={Account}
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
                </>

            )}

        </Stack.Navigator>
    )
}