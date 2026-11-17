import { StyleSheet, Text, View } from "react-native";

const transactionItems = [
  { label: "Estimated fee", value: "$2.50" },
  { label: "Amount received", value: "0.025 ETH" },
  { label: "Spread", value: "0.15%" },
  { label: "Gas fee", value: "$1.20" },
];

export default function TransactionDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction details</Text>

      <View style={styles.detailsList}>
        {transactionItems.map((item) => (
          <View key={item.label} style={styles.detailRow}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(29, 25, 38, 0.72)",
    borderWidth: 1,
    borderColor: "rgba(164, 125, 190, 0.14)",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  detailsList: {
    gap: 18,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#92899E",
    fontSize: 13,
  },
  value: {
    color: "#E7D9F3",
    fontSize: 13,
    fontWeight: "600",
  },
});
