import { Picker, TextInput } from "@expo/ui/swift-ui";
import React from "react";
import { View } from "react-native";
const Segmentes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [, setValue] = React.useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        autocorrection={true}
        defaultValue="New Text Input"
        onChangeText={setValue}
        style={{
          borderWidth: 1,
          width: "80%",
          alignSelf: "center",
          marginBottom: 50,
          padding: 10,
        }}
      />
      <Picker
        options={["$", "$$", "$$$", "$$$$"]}
        style={{
          width: "95%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        selectedIndex={selectedIndex}
        onOptionSelected={({ nativeEvent: { index } }) => {
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export default Segmentes;
