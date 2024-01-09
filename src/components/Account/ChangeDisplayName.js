import { View, Text, TextInput } from 'react-native';
import {CustomButton} from "../Elements/CustomButton";
export function ChangeDisplayName(){
    return(
        <View>
            <TextInput placeholder="Name & last name" />
            <CustomButton title = "Change Name"/>
        </View>
    )
}