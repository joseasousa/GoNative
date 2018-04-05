import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
    .configure({
      name: 'GitHub',
    })
    .useReactNative()
    .connect();

  console.tron = tron;
}
