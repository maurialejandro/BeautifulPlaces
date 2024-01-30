import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Account/Login/Login';
import { Register } from '../screens/Account/Register/Register';
import { Account } from "../screens/Account/Account";
import {useAuthContext} from "../context/AuthContext";
import {UserLogged} from "../screens/Account/UserLogged/UserLogged";

const Stack = createStackNavigator();

export function AccountStack(){

    const user = useAuthContext();

    return(
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "#ffffff" },
                headerStyle: {
                    backgroundColor: "#FFB534",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomWidth: 0.2,
                    borderColor: "#000000",
                    borderStartWidth: 0.2,
                    borderEndWidth: 0.2,
                    borderStyle: "solid",
                }
            }}
        >
            { user.isLogged ? (
                <>
                    <Stack.Screen
                        name="account-options"
                        component={UserLogged}
                        options={{ title: "Cuenta" }}
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
                        options={{ title: "Iniciar sesion" }}
                    />
                    <Stack.Screen
                        name="register"
                        component={Register}
                        options={{ title: "Registro" }}
                    />
                </>

            )}

        </Stack.Navigator>
    )
}