import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  const [color, setColor] = useState('#FF0000');
  const router = useRouter()
  return (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Button title='Color Picker' onPress={()=>{router.replace('/(auth)/color_picker')}} />
   <Button title='Bottom Sheet' onPress={()=>{router.replace('/(auth)/bottomsheet')}} />
   <Button title='Date' onPress={()=>{router.replace('/(auth)/date')}} />


    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
