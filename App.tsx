import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import store from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
