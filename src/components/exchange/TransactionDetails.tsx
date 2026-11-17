import { StyleSheet, Text, View } from "react-native";

const transactionItems = [
  { label: "Estimated fee", value: "4.28 USD" },
  { label: "You will receive", value: "43,941.68 USD" },
  { label: "Spread", value: "0.2%" },
  { label: "Gas fee", value: "0.0045 ETH" },
];

export default function TransactionDetails() {
  return (
    <View style={styles.container}>
      {transactionItems.map((item) => (
        <View key={item.label} style={styles.detailRow}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 18,
    paddingHorizontal: 4,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  label: {
    color: "#92899E",
    fontSize: 13,
    flex: 1,
  },
  value: {
    color: "#E7D9F3",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    flexShrink: 0,
  },
});
