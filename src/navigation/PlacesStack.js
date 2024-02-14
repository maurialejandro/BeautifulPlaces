import { createStackNavigator } from "@react-navigation/stack";
import { Places } from "../screens/Places/Places";
import Place from "../screens/Places/Place";
import AddPlaceForm from "../components/Places/AddPlaceForm";
import AddPlace from "../screens/Places/AddPlace";

export function PlacesStack(){
    const Stack = createStackNavigator();

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
            <Stack.Screen
                name="places"
                component={Places}
                options={{title: "Lugares"}}
            />
            <Stack.Screen
                name='place'
                component={Place}
                options={{title: "Lugar"}}
            />
            <Stack.Screen
                name='add-place'
                component={AddPlace}
                options={{title: "Añadir nuevo lugar"}}
            />
        </Stack.Navigator>
    )
}