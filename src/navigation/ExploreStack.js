import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/Explore/Explore";

export function ExploreStack(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="explore" component={Explore} />
        </Stack.Navigator>
    )
}