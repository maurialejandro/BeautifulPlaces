import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from "./AccountStack";
import { PlacesStack } from "./PlacesStack";
import { SearchStack } from "./SearchStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { screenOptions } from "../utils/screenOptions";
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
                    backgroundColor: "#FFB534",
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
                component={SearchStack}
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
