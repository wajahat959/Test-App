import { DateTimePicker } from '@expo/ui/swift-ui';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
const router=useRouter()
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
     
  <View style={{ marginBottom: 20 }}>
       <Text style={{ fontSize: 18, marginBottom: 16 }}>
        Selected Date: {new Date(selectedDate).toDateString()}
      </Text>
      <DateTimePicker
        onDateSelected={(date:any) => setSelectedDate(date)}
        displayedComponents="date"
        initialDate={selectedDate}
        variant="wheel"
        style={{ height: 200 }}
      />
      </View>
      <DateTimePicker
        onDateSelected={(date:any) => setSelectedDate(date)}
        displayedComponents="date"
        initialDate={selectedDate}
        variant="compact"
        style={{ height: 200 }}
      />
         <Button title='Back' onPress={()=> router.replace('/')} />
    </View>
  );
}
