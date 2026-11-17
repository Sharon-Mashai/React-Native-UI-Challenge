import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExchangeCurrencyPanel() {
  return (
    <View style={styles.container}>
      {/* ETH section */}
      <View style={styles.currencySection}>
        <View style={styles.topRow}>
          <View style={styles.currencyInfo}>
            <View style={styles.ethereumIcon}>
              <Text style={styles.ethereumSymbol}>♦</Text>
            </View>

            <Text style={styles.currencyName}>ETH</Text>
            <Text style={styles.chevron}>⌄</Text>
          </View>
        </View>

        <Text style={styles.amount}>12,695</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>293.0187</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Swap button */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Swap currencies"
        style={styles.swapButton}
        onPress={() => {}}
      >
        <Text style={styles.swapIcon}>↕</Text>
      </Pressable>

      {/* USD section */}
      <View style={styles.currencySection}>
        <View style={styles.topRow}>
          <View style={styles.currencyInfo}>
            <View style={styles.dollarIcon}>
              <Text style={styles.dollarSymbol}>$</Text>
            </View>

            <Text style={styles.currencyName}>USD</Text>
            <Text style={styles.chevron}>⌄</Text>
          </View>
        </View>

        <Text style={styles.amount}>43,937.4</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>12,987.21</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#211D26",
    borderRadius: 22,
    overflow: "visible",
    position: "relative",
  },
  currencySection: {
    height: 211,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencyInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  ethereumIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#101014",
    alignItems: "center",
    justifyContent: "center",
  },
  ethereumSymbol: {
    color: "#FFFFFF",
    fontSize: 27,
  },
  dollarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#302D36",
    alignItems: "center",
    justifyContent: "center",
  },
  dollarSymbol: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "500",
  },
  currencyName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
  },
  chevron: {
    color: "#AAA2B3",
    fontSize: 18,
    marginLeft: -4,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 56,
    fontWeight: "300",
    letterSpacing: -1.8,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    color: "#A9A0B7",
    fontSize: 15,
  },
  balanceValue: {
    color: "#A9A0B7",
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  swapButton: {
    position: "absolute",
    top: 191,
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "#09090C",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    elevation: 5,
  },
  swapIcon: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "400",
  },
});
