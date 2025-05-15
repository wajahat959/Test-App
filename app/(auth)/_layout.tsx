import { Stack } from 'expo-router';
// const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 500,
        contentStyle: { backgroundColor: 'transparent' },
      }}

    >
         <Stack.Screen
        options={{ gestureEnabled: true }}
        name="color_picker/index"
      />
      <Stack.Screen
        options={{ gestureEnabled: true }}
        name="bottomsheet/index"
      />
        <Stack.Screen
        options={{ gestureEnabled: true }}
        name="date/index"
      />
        <Stack.Screen
        options={{ gestureEnabled: true }}
        name="segmented/index"
      />
       <Stack.Screen
        options={{ gestureEnabled: true }}
        name="pickerWheel/index"
      />
       <Stack.Screen
        options={{ gestureEnabled: true }}
        name="switch/index"
      />
    </Stack>
  );
};

export default Layout;
