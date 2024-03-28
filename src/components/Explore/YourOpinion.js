import React from "react";
import {Text, View} from "react-native";
import {Rating} from "react-native-ratings";
import {styles} from "../styles";
import {Button} from "@rneui/themed";

export default function YourOpinion(props){
    const { place } = props;
    const { rankingUser } = props;
    const editRanking = () => {
        console.log("EDITRANKINGUSER");
    }
    return(
        <View style={styles.content} >
            <View style={styles.contentViewHeaderOpinion} >
                <View style={styles.contentViewHeaderOpinionView}>
                    <Text>Tu opinion </Text>
                    <Rating
                        readonly={true}
                        showReadOnlyText={false}
                        ratingCount={5}
                        imageSize={15}
                        startingValue={
                            rankingUser[0].ranking
                        }
                    />
                </View>
                <View>
                    <Button
                        size={"sm"}
                        buttonStyle={{
                            width: 150,
                            borderRadius: 10,
                            backgroundColor: "#ACF6C8",

                        }}
                        titleStyle={{
                            color: "#000"
                        }}
                        onPress={editRanking}
                    >
                        Editar opinion
                    </Button>
                </View>
            </View>
        </View>
    );
}