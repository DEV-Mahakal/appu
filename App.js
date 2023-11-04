import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './components/First';
import QuizPage from './components/QuizPage';
import Results from './components/Results';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={First}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={Results}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
