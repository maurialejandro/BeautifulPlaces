import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();

export function Navigation (){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Account"
                component={AccountStack}
            />
        </Tab.Navigator>
    )
}
