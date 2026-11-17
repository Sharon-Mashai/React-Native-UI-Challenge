
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

type CurrencyCardProps = {
  currency: "ETH" | "USD";
  amount: string;
  balance: string;
};

export default function CurrencyCard({
  currency,
  amount,
  balance,
}: CurrencyCardProps) {
  const { width } = useWindowDimensions();

  const isEthereum = currency === "ETH";

  const amountFontSize = width < 360 ? 42 : width < 400 ? 48 : 54;

  return (
    <View style={styles.currencySection}>
      <View style={styles.currencyHeader}>
        <View
          style={isEthereum ? styles.ethereumIcon : styles.dollarIcon}
        >
          <Text
            style={isEthereum ? styles.ethereumSymbol : styles.dollarSymbol}
          >
            {isEthereum ? "♦" : "$"}
          </Text>
        </View>

        <Text style={styles.currencyName}>{currency}</Text>

        <Text style={styles.dropdownArrow}>⌄</Text>
      </View>

      <Text style={[styles.amount, { fontSize: amountFontSize }]}>
        {amount}
      </Text>

      <View style={styles.balanceRow}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>{balance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  currencySection: {
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 26,
  },
  currencyHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  ethereumIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#0B0B0D",
    alignItems: "center",
    justifyContent: "center",
  },
  ethereumSymbol: {
    color: "#E7E7E9",
    fontSize: 28,
    transform: [{ scaleY: 1.2 }],
  },
  dollarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2B2931",
    alignItems: "center",
    justifyContent: "center",
  },
  dollarSymbol: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  currencyName: {
    color: "#F7F5F8",
    fontSize: 20,
  },
  dropdownArrow: {
    color: "#A8A0B5",
    fontSize: 18,
    marginLeft: -3,
  },
  amount: {
    color: "#F7F5F8",
    fontWeight: "300",
    letterSpacing: -1.5,
    marginTop: 12,
    marginBottom: 12,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    color: "#A6A0B8",
    fontSize: 15,
  },
  balanceValue: {
    color: "#A6A0B8",
    fontSize: 15,
  },
});
