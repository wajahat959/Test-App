import { MeshGradientView } from "expo-mesh-gradient";
import { useState } from "react";
import { View } from "react-native";

export default function EasyEmoneyGradientMesh() {
  const [points, setPoints] = useState(initialPoints());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPoints(prev =>
  //       prev.map(([x, y]) => [
  //         clamp(x + (Math.random() - 0.5) * 0.015), // more subtle motion
  //         clamp(y + (Math.random() - 0.5) * 0.015),
  //       ])
  //     );
  //   }, 80); // ~12 FPS for smoother animation

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <MeshGradientView
        style={{ flex: 1 }}
        columns={3}
        rows={3}
        colors={[
          "red",
          "purple",
          "indigo",
          "orange",
          "white",
          "blue",
          "yellow",
          "green",
          "cyan",
        ]}
        points={[
          [0.0, 0.0],
          [0.5, 0.0],
          [1.0, 0.0],
          [0.0, 0.5],
          [0.5, 0.5],
          [1.0, 0.5],
          [0.0, 1.0],
          [0.5, 1.0],
          [1.0, 1.0],
        ]}
      />
    </View>
  );
}

// Helper to clamp values between 0 and 1
const clamp = (val: number) => Math.max(0, Math.min(1, val));

const initialPoints = () => [
  [0.0, 0.0],
  [0.5, 0.0],
  [1.0, 0.0],
  [0.0, 0.5],
  [0.5, 0.5],
  [1.0, 0.5],
  [0.0, 1.0],
  [0.5, 1.0],
  [1.0, 1.0],
];
