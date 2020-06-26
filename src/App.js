import './configs/ReactotronConfig';
import * as React from 'react';
import Route from 'app/routes';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'app/store';
import FlashMessage from 'react-native-flash-message';

import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.unlockAsync();

import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <Route />
        <FlashMessage position="top" />
      </PersistGate>
    </StoreProvider>
  );
}
