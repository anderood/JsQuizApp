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

import { Home } from './src/pages/Home';
import { Dashboard } from './src/pages/Dashboard';


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
        <Stack.Navigator initialRouteName='Dashboard'>
          <Stack.Screen name='JSQUIZ' component={Home} />
          <Stack.Screen name='Home' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
