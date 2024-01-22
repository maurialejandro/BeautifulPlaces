import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export const CustomButton = ({ onPress, title }) => (
    <View style={styles.container} >
        <TouchableOpacity onPress={onPress} style={styles.btn} >
            <Text style={styles.text} >{ title }</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    text: {
        color: "#000000"
    },
    btn: {
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#C1F2B0",
        width: "40%",
        height: 40,
        padding: 10,
        marginTop: 15,
        elevation: 3
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
