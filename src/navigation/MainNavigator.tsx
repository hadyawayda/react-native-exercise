import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import SplashScreen from '../screens/SplashScreen';
import { MainStackParamList } from '../types/navigation';
import OnboardingStack from './OnboardingStack';

const Stack = createStackNavigator();

const MainNavigator = () => {
  // const isOnboarded = useSelector(
  //   (state: RootState) => state.companyData.companyID,
  // );

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const linking: LinkingOptions<MainStackParamList> = {
    prefixes: ['itxiapp://'],
    config: {
      screens: {
        Main: {
          screens: {
            SettingsStack: {
              screens: {
                SetCompanyID: 'set-company-id',
              },
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          showSplash ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : (
            // isOnboarded === '' ? (
            <Stack.Screen name="Onboarding" component={OnboardingStack} />
          )
          // ) : (
          // <Stack.Screen name="Main" component={MainStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
