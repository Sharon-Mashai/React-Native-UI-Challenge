
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BuyEthButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Buy ETH"
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => {}}
      style={styles.button}
    >
      <View
        style={[
          styles.buttonContent,
          pressed ? styles.pressedBackground : styles.normalBackground,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            pressed ? styles.pressedText : styles.normalText,
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
  pressedBackground: {
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
  pressedText: {
    color: "#FFFFFF",
  },
});
