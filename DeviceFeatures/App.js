import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './component/ui/IconButton';
import { Colors } from './constant/colors';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: Colors.primary700},
          headerTintColor:Colors.gray700,
          contentStyle:{backgroundColor:Colors.gray700}
        }}>
          <Stack.Screen name="AllPlaces" component={AllPlaces} options={({navigation})=>({
            title:"Your Favorite Places",
            headerRight: ({ tintColor }) => <IconButton icon="add" color={tintColor} onPress={()=>navigation.navigate('AddPlaces')} size={20}/>
          })} />
          <Stack.Screen name="AddPlaces" component={AddPlace} options={{
            title:'Add a new place'
          }}/>
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}