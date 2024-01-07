import { createStackNavigator } from "@react-navigation/stack";
import { Places } from "../screens/Places/Places";

export function PlacesStack(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="places"
                component={Places}
            />
        </Stack.Navigator>
    )
}