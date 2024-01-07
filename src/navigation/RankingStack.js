import {createStackNavigator} from "@react-navigation/stack";
import {Ranking} from "../screens/Ranking/Ranking";

export function RankingStack(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="ranking" component={Ranking} />
        </Stack.Navigator>
    )
}