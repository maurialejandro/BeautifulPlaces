import { createStackNavigator } from "@react-navigation/stack";
import { Favorites } from "../screens/Favorites/Favorites";

export function FavoritesStack() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="favorites" component={Favorites} />
        </Stack.Navigator>
    )
}