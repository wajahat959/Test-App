import { BottomSheet } from "@expo/ui/swift-ui";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const BottomSheets = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 100 }}>
        <Button title="Open Bottom Sheet" onPress={() => setIsOpen(true)} />
      </View>
      <BottomSheet
        isOpened={isOpen}
        onIsOpenedChange={setIsOpen}
        style={{
          height: "50%",
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Hello, world!</Text>
      </BottomSheet>
      <Button title="Back" onPress={() => router.replace("/")} />
    </View>
  );
};

export default BottomSheets;
