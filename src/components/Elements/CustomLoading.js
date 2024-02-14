import React from 'react';

import { ActivityIndicator, View } from "react-native";

export function CustomLoading(){
    return(
      <View>
          <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
}