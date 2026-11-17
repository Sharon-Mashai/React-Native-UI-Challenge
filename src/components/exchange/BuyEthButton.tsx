import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BuyEthButton() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const isActive = hovered || pressed;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Buy ETH"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => {}}
      style={styles.button}
    >
      <View
        style={[
          styles.buttonContent,
          isActive ? styles.activeBackground : styles.normalBackground,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            isActive ? styles.activeText : styles.normalText,
          ]}
        >
          Buy ETH
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 28,
  },
  buttonContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  normalBackground: {
    backgroundColor: "#FFFFFF",
  },
  activeBackground: {
    backgroundColor: "#000000",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  normalText: {
    color: "#000000",
  },
  activeText: {
    color: "#FFFFFF",
  },
});
