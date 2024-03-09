import React from "react"
const apiUrl = process.env.API_URL;
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
export default function CarouselImages(props){

    const { width, height, files } = props;
    console.log(files)
    return(
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={files}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}