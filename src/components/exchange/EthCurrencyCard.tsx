import { Pressable, StyleSheet, Text, View } from "react-native";

export default function EthCurrencyCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.currencyInfo}>
          <View style={styles.iconCircle}>
            <Text style={styles.ethereumSymbol}>◆</Text>
          </View>

          <View>
            <Text style={styles.currencyName}>Ethereum</Text>
            <Text style={styles.currencyCode}>ETH</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Select currency"
          style={styles.selector}
          onPress={() => {}}
        >
          <Text style={styles.selectorText}>ETH</Text>
          <Text style={styles.chevron}>⌄</Text>
        </Pressable>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.amount}>0.025</Text>
        <Text style={styles.balance}>Balance: 1.458 ETH</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 174,
    padding: 20,
    borderRadius: 22,
    backgroundColor: "rgba(29, 25, 38, 0.88)",
    borderWidth: 1,
    borderColor: "rgba(164, 125, 190, 0.16)",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currencyInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29233A",
  },
  ethereumSymbol: {
    color: "#C7B7E8",
    fontSize: 23,
  },
  currencyName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  currencyCode: {
    color: "#92899E",
    fontSize: 12,
    marginTop: 3,
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#332A40",
  },
  selectorText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  chevron: {
    color: "#BBA8D0",
    fontSize: 16,
  },
  amountSection: {
    marginTop: 22,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: -0.8,
  },
  balance: {
    color: "#92899E",
    fontSize: 12,
    marginTop: 6,
  },
});
