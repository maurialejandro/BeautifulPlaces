import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { styles } from "../styles";

export const CustomButton = ({ onPress, title }) => (
    <View style={styles.customButtonContainer} >
        <TouchableOpacity onPress={onPress} style={styles.btn} >
            <Text style={styles.text} >{ title }</Text>
        </TouchableOpacity>
    </View>
)

