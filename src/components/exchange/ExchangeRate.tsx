import { StyleSheet, Text, View } from "react-native";

export default function ExchangeRate() {
  return (
    <View style={styles.container}>
      <View style={styles.rateInfo}>
        <Text style={styles.label}>Exchange rate</Text>
        <Text style={styles.rate}>1 ETH = 3,300.00 USD</Text>
      </View>

      <View style={styles.status}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>Live rate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  rateInfo: {
    gap: 6,
  },
  label: {
    color: "#92899E",
    fontSize: 12,
    fontWeight: "500",
  },
  rate: {
    color: "#E7D9F3",
    fontSize: 14,
    fontWeight: "600",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "rgba(120, 75, 155, 0.16)",
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#A879D2",
  },
  statusText: {
    color: "#BBA8D0",
    fontSize: 11,
    fontWeight: "500",
  },
});
