import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from "./AccountStack";
import { PlacesStack } from "./PlacesStack";
import { SearchStack } from "./SearchStack";
import { Icon } from "@rneui/base";
import {FavoritesStack} from "./FavoritesStack";
import {RankingStack} from "./RankingStack";

const Tab = createBottomTabNavigator();
export function Navigation (){
    return(
        <Tab.Navigator
            initialRouteName="Account"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveBackgroundColor: "#FDFFAB",
                tabBarInactiveBackgroundColor: "#F3B664",
                tabBarStyle: {
                    borderStyle: "solid",
                    borderTopWidth: 1,
                    borderColor: "#000000",
                },
                tabBarIconStyle: { opacity: 0.7 },
                tabBarIcon: ({ color, size }) => screenOptions(route, color = "#000000", size= 25),
                tabBarLabelStyle: { color: "#000000" }
            })}
        >

            <Tab.Screen
                name="Places"
                component={PlacesStack}
            />
            <Tab.Screen
                name="Search"
                component={SearchStack}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesStack}
            />
            <Tab.Screen
                name="Ranking"
                component={RankingStack}
            />
            <Tab.Screen
                name="Account"
                component={AccountStack}
            />

        </Tab.Navigator>

    )
}
 function screenOptions(route, color, size) {
    let iconName;

    switch(route.name) {
        case "Account":
            iconName = "account";
            break;
        case "Places":
            iconName = "emoticon-cool";
            break;
        case "Search":
            iconName = "magnify";
            break;
        case "Favorites":
            iconName = "heart";
            break;
        case "Ranking":
            iconName = "star";
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={size} color={color} />
    )
 }