
import { StyleSheet, Text, View } from "react-native";

type TransactionDetail = {
  label: string;
  value: string;
};

type TransactionDetailsProps = {
  details: TransactionDetail[];
};

export default function TransactionDetails({
  details,
}: TransactionDetailsProps) {
  return (
    <View style={styles.transactionDetails}>
      {details.map((detail) => (
        <View key={detail.label} style={styles.detailRow}>
          <Text style={styles.detailLabel}>{detail.label}</Text>
          <Text style={styles.detailValue}>{detail.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  transactionDetails: {
    marginTop: 25,
    gap: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    color: "#A6A0B8",
    fontSize: 13,
  },
  detailValue: {
    color: "#F4F0F6",
    fontSize: 13,
  },
});
