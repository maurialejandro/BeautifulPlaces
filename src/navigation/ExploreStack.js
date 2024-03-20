import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/Explore/Explore";
import PlaceE from "../screens/Explore/PlaceE";
export function ExploreStack(){
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
            <Stack.Screen
                name="explore"
                component={Explore}
                options={{title: "Explorar"}}
            />
            <Stack.Screen
                name="place-e"
                component={PlaceE}
                options={{ title: "Lugar" }}
            />
        </Stack.Navigator>
    )
}