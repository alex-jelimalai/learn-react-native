import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen'
import { CATEGORIES } from './data/dummy-data';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle: { backgroundColor: '#351401' },
           headerTintColor:'white',
           contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={{
              title: 'All Categories'
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
              title: 'Meal Details'
            }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
