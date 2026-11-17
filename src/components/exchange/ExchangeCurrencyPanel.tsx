import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const currencies = {
  eth: {
    name: "ETH",
    amount: "12,695",
    balance: "293.0187",
    icon: "ethereum" as const,
  },
  usd: {
    name: "USD",
    amount: "43,937.4",
    balance: "12,987.21",
    icon: "currency-usd" as const,
  },
};

export default function ExchangeCurrencyPanel() {
  const [isReversed, setIsReversed] = useState(false);

  const topCurrency = isReversed ? currencies.usd : currencies.eth;
  const bottomCurrency = isReversed ? currencies.eth : currencies.usd;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#55545C", "#302337", "#24132F"]}
        locations={[0, 0.52, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.backgroundGradient}
        pointerEvents="none"
      />

      {/* Top currency */}
      <View style={styles.currencySection}>
        <View style={styles.currencyInfo}>
          <View
            style={
              topCurrency.name === "ETH"
                ? styles.ethereumIcon
                : styles.dollarIcon
            }
          >
            <MaterialCommunityIcons
              name={topCurrency.icon}
              size={27}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.currencyName}>{topCurrency.name}</Text>

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="#D2C8D9"
          />
        </View>

        <Text style={styles.amount}>{topCurrency.amount}</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>{topCurrency.balance}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Interactive swap button */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Swap currencies"
        style={styles.swapButton}
        onPress={() => setIsReversed((previous) => !previous)}
      >
        <MaterialCommunityIcons
          name="swap-vertical"
          size={25}
          color="#FFFFFF"
        />
      </Pressable>

      {/* Bottom currency */}
      <View style={styles.currencySection}>
        <View style={styles.currencyInfo}>
          <View
            style={
              bottomCurrency.name === "ETH"
                ? styles.ethereumIcon
                : styles.dollarIcon
            }
          >
            <MaterialCommunityIcons
              name={bottomCurrency.icon}
              size={27}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.currencyName}>{bottomCurrency.name}</Text>

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="#D2C8D9"
          />
        </View>

        <Text style={styles.amount}>{bottomCurrency.amount}</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>{bottomCurrency.balance}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 22,
    position: "relative",
    overflow: "visible",
    backgroundColor: "#55545C",
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFill,
    borderRadius: 22,
  },
  currencySection: {
    height: 211,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 24,
    justifyContent: "space-between",
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
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  dollarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  currencyName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
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
    color: "#D0C9D5",
    fontSize: 15,
  },
  balanceValue: {
    color: "#E0D5E8",
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
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
});
