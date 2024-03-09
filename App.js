import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import {AuthProvider} from "./src/context/AuthContext";
import {PlaceProvider} from "./src/context/PlaceContext";

export default function App() {
  return (
      <AuthProvider>
          <PlaceProvider>
              <NavigationContainer>
                  <Navigation />
              </NavigationContainer>
          </PlaceProvider>
      </AuthProvider>


  );
}

