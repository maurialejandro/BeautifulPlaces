import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import {AuthProvider} from "./src/context/AuthContext";
import {PlaceProvider} from "./src/context/PlaceContext";
import {NetInfoProvider} from "./src/context/NetInfoContext";
import {FavoritePlaceProvider} from "./src/context/FavoritesPlaceContext";

export default function App() {
  return (
      <AuthProvider>
          <PlaceProvider>
              <NetInfoProvider>
                  <FavoritePlaceProvider>
                      <NavigationContainer>
                          <Navigation />
                      </NavigationContainer>
                  </FavoritePlaceProvider>
              </NetInfoProvider>
          </PlaceProvider>
      </AuthProvider>
  );
}

