import {View, Text} from "react-native";
import {CustomButton} from "../Elements/CustomButton";

export function ChangeEmailForm(){
    return(
        <View>
            <Text> Change Email </Text>
            <CustomButton title="Save" />
        </View>
    )
}