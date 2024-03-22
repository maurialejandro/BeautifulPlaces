import {createStackNavigator} from "@react-navigation/stack";
import {Ranking} from "../screens/Ranking/Ranking";

export function RankingStack(){
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
            <Stack.Screen name="ranking" component={Ranking} options={{ title: "Ranking"}} />
        </Stack.Navigator>
    )
}