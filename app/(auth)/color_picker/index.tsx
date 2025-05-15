import { ColorPicker } from "@expo/ui/swift-ui";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const ColorPickers = () => {
  const [color, setColor] = useState("#FF0000");
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        Selected Color: {color}
      </Text>
      <ColorPicker
        label="Select a color"
        selection={color}
        onValueChanged={setColor}
        style={{ width: 300, height: 200 }}
      />
      <Button title="Back" onPress={() => router.replace("/")} />
    </View>
  );
};

export default ColorPickers;
