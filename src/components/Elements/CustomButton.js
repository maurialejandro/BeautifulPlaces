import {Text, View } from "react-native";
import { Button } from '@rneui/themed';
import { styles } from "../styles";

export const CustomButton = ({ onPress, title }) => (
    <View style={styles.customButtonContainer} >
        <Button
            containerStyle={{
                marginHorizontal: 50,
                marginVertical: 10,
                borderRadius: 10,
                elevation: 5
            }}
            buttonStyle={{
                backgroundColor: "#ACF6C8",

            }}
            onPress={onPress}
        >
           <Text style={styles.txtCustomButton} >{ title } </Text>
        </Button>
    </View>
)

