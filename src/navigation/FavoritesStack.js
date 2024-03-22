import { createStackNavigator } from "@react-navigation/stack";
import { Favorites } from "../screens/Favorites/Favorites";

export function FavoritesStack() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "#EEEDED" },
                headerStyle: {
                    backgroundColor: "#55B4B0",
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
            <Stack.Screen name="favorites" component={Favorites} options={{ title: "Mis Favoritos" }} />
        </Stack.Navigator>
    )
}