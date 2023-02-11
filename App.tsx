import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/Global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/pages/Dashboard';
import { Home } from './src/pages/Home';
import { ViewQuiz } from './src/pages/ViewQuiz';
import { ViewResult } from './src/pages/ViewResult';

export default function App() {
  
  const Stack = createNativeStackNavigator(); 

  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fonstLoaded){
    return <AppLoading/>
  }

  return (
    
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='JSQUIZ' component={ViewResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
