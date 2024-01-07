import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "../screens/Search/Search";

export function SearchStack(){
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
    )
}