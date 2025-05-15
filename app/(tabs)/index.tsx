import { useRouter } from "expo-router";
import { Button, View } from "react-native";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Color Picker"
        onPress={() => {
          router.push("/(auth)/color_picker");
        }}
      />
      <Button
        title="Bottom Sheet"
        onPress={() => {
          router.push("/(auth)/bottomsheet");
        }}
      />
      <Button
        title="Date"
        onPress={() => {
          router.push("/(auth)/date");
        }}
      />
         <Button
        title="Segment"
        onPress={() => {
          router.push("/(auth)/segmented");
        }}
      />
       <Button
        title="Picker Wheel"
        onPress={() => {
          router.push("/(auth)/pickerWheel");
        }}
      />
        <Button
        title="Switch"
        onPress={() => {
          router.push("/(auth)/switch");
        }}
      />
    </View>
  );
}
