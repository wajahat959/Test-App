import { Picker } from '@expo/ui/swift-ui';
import React from 'react';
import { Text, View } from 'react-native';
const Picker_Wheel = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        <Text style={{alignSelf:'center',marginBottom:50}}> Selected Index: {selectedIndex}</Text>
<Picker
  options={['$', '$$', '$$$', '$$$$',"$$$$$",'$$$$$$','$$$$$$$','$$$$$$$$','$$$$$$$$$','$$$$$$$$$$']}
  selectedIndex={selectedIndex}
  onOptionSelected={({ nativeEvent: { index } }) => {
    setSelectedIndex(index);
  }}
  variant="wheel"
  style={{
    alignSelf: "center",
    width: "70%",
    height: 100,
  }}
/>
    </View>
  )
}

export default Picker_Wheel