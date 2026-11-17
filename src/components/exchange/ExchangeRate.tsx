
import { StyleSheet, Text, View } from "react-native";

export default function ExchangeRate() {
  return (
    <View style={styles.container}>
      <Text style={styles.rate} numberOfLines={1} adjustsFontSizeToFit>
        1 ETH = 3,300.00 USD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  rate: {
    color: "#E7D9F3",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
