import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'
import FavoriteContextProvider from './store/favorite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={
    {
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }
  }>
    <Drawer.Screen name='Categories' component={CategoriesScreen}
      options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} /> }} />
    <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{ title: 'Favorites', drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} /> }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen name="DrawerScreen" component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="MealsOverview"
              component={MealsOverviewScreen}
            // options={({route, navigation})=>{
            //   const catId = route.params.categoryId;
            //   const title  = CATEGORIES.filter(c=> c.id === catId)[0].title
            //   return {title}
            // }}

            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}
              options={{
                title: 'Meal Details',
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
