import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="cards" options={{ headerShown: false}} />
        <Stack.Screen name="unity" options={{ headerShown: false}} />
        <Stack.Screen name="contact" options={{ headerShown: false}} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
