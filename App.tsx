import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './src/store/store';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
