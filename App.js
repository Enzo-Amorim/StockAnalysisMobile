/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Dashboard from './src/pages/Dashboard';
import StockDetail from './src/pages/StockDetail'
import Stock from './src/components/Stock'
import store from './src/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#FFF',
              },
              headerTintColor: '#5731E0',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: "center"
            }} />
          <Stack.Screen
            name="Details"
            component={StockDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
