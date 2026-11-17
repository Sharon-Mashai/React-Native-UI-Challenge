import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";

export default function CurrencySwapButton() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Swap currencies"
      style={styles.button}
      onPress={() => {}}
    >
      <LinearGradient
        colors={["#A66BCE", "#7445A8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.swapIcon}>⇅</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignSelf: "center",
    marginVertical: -12,
    zIndex: 1,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#0B0B10",
  },
  swapIcon: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "600",
  },
});
