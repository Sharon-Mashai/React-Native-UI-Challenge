import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";

export default function BuyEthButton() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Buy ETH"
      style={styles.button}
      onPress={() => {}}
    >
      <LinearGradient
        colors={["#A66BCE", "#7445A8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>Buy ETH</Text>
      </LinearGradient>
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
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
