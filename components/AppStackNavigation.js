import React from 'react';
import{createStackNavigater} from 'ract-navigatin-stack';
import ExchangeScreen from '../screens/ExchangeScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigation = createStackNavigater({
    ExchangeScreen:{
     screen:ExchangeScreen,
     navigationOptions:{
         headerShown:false
     }
 },

 ReceiverDetails:{
     screen:ReceiverDetailsScreen,
     navigationOptions:{
         headerShown:false
     }
 }

},
{
    initialRoutenName:'ExchangeScreenList'
}

)