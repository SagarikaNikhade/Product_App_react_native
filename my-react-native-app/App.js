import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductListing from "./screens/ProductListing";
import Favourite from "./screens/Favourite";
import ProductDetails from "./screens/ProductDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProductContext from './context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// for bottom navbar
function BottomTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen options={{
            title:"Product List"
          }} name='ProductListing'  component={ProductListing}/>
      <Tab.Screen options={{
            title:"Favourites"
          }} name='Favourite'  component={Favourite}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:"#fff"
          },
          contentStyle:{
            backgroundColor:"teal"
          }
        }}
        >
          {/* here is showing BottomTabs on screen so for remove it here use options */}
          <Stack.Screen options={{
            headerShown:false
          }} name='BottomTabs'  component={BottomTabs}/>
          <Stack.Screen options={{
            title:"Product Details",
          }} name='ProductDetails'  component={ProductDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
