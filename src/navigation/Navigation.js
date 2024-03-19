import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from "./AccountStack";
import { PlacesStack } from "./PlacesStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { screenOptions } from "../utils/screenOptions";
import {ExploreStack} from "./ExploreStack";
const Tab = createBottomTabNavigator();
export function Navigation (){
    return(
        <Tab.Navigator
            initialRouteName="Cuenta"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    borderStyle: "solid",
                    borderTopWidth: 0.2,
                    borderColor: "#000000",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderStartWidth: 0.2,
                    borderEndWidth: 0.2,
                    backgroundColor: "#55B4B0",
                },
                tabBarIcon: ({ focused, color, size }) => screenOptions(focused, route, color = "#ffffff", size= 27),
                tabBarLabelStyle: { color: "#000000", fontSize: 10, marginBottom: 2, marginTop: -3 }
            })}
        >
            <Tab.Screen
                name="Mis Lugares"
                component={PlacesStack}
            />
            <Tab.Screen
                name="Explorar"
                component={ExploreStack}
            />
            <Tab.Screen
                name="Favoritos"
                component={FavoritesStack}
            />
            <Tab.Screen
                name="Ranking"
                component={RankingStack}
            />
            <Tab.Screen
                name="Cuenta"
                component={AccountStack}
            />

        </Tab.Navigator>
    )
}
