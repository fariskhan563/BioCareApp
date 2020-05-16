import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Alert} from 'react-native';
// import {Provider} from 'react-redux';
// import LoadingView from './src/components/LoadingView';
// import {setContainer} from './src/services/navigatorService'
// import {store,persistor} from './src/redux/store';
// import {PersistGate} from 'redux-persist/integration/react'

//Navigation
import Navigation from './src/navigation';

export default function App() {
  console.disableYellowBox = true;
  return (
    <Navigation />

    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <LoadingView>
    //       <Navigation
    //       ref={ref => {
    //         setContainer(ref);
    //       }}/>
    //     </LoadingView>
    //   </PersistGate>
    // </Provider>
  );
}
