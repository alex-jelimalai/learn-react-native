import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpsenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles'
import { Ionicons } from '@expo/vector-icons'
import IconButton from './ui/IconButton';
import ExpenseContextProvider from './store/expsense-context';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator screenOptions={({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => {
        return <IconButton icon="add"
          size={24} color={tintColor}
          onPress={() => navigation.navigate("ManageExpense")}
        />
      }
    }
  }}>
    <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />
      }} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpsenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={size} color={color} />
      }} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}>
            <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{ headerShown: false }} />
            <Stack.Screen name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  )
}

