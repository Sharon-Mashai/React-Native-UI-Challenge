import { Pressable, StyleSheet, Text, View } from "react-native";

type SwapButtonProps = {
  onPress: () => void;
};

export default function SwapButton({ onPress }: SwapButtonProps) {
  return (
    <View style={styles.swapDivider}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Swap currencies"
        onPress={onPress}
        style={({ pressed }) => [
          styles.swapButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.swapIcon}>↕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  swapDivider: {
    height: 1,
    backgroundColor: "#0C0B0E",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  swapButton: {
    position: "absolute",
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0B090B",
    alignItems: "center",
    justifyContent: "center",
  },
  swapIcon: {
    color: "#FFFFFF",
    fontSize: 23,
  },
  buttonPressed: {
    opacity: 0.65,
  },
});
