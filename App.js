import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
//   const { user, setUser } = useContext(AuthenticatedUserContext);
//   const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(
//       auth,
//       async authenticatedUser => {
//         authenticatedUser ? setUser(authenticatedUser) : setUser(null);
//         setIsLoading(false);
//       }
//     );
//     return unsubscribeAuth;
//   }, [user]);
// if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size='large' />
//       </View>
//     );
//   }

return (
    <NavigationContainer>
      {/* {user ? <ChatStack /> : <AuthStack />} */}
      <ChatStack/>
    </NavigationContainer>
  );
}

export default function App() {
  return  <RootNavigator />
}




