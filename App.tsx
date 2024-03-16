import React, {useEffect} from 'react';
// import {StyleSheet, Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartPageScreen from './pages/StartPage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    onCreate(null);
  }, []);

  const onCreate = (savedInstanceState: any) => {
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="StartPage" component={StartPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
