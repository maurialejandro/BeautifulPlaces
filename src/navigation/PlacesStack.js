import { createStackNavigator } from "@react-navigation/stack";
import { Places } from "../screens/Places/Places";

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
            />
        </Stack.Navigator>
    )
}