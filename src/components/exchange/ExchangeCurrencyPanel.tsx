
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExchangeCurrencyPanel() {
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

      {/* ETH section */}
      <View style={styles.currencySection}>
        <View style={styles.currencyInfo}>
          <View style={styles.ethereumIcon}>
            <MaterialCommunityIcons
              name="ethereum"
              size={27}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.currencyName}>ETH</Text>
          <Text style={styles.chevron}>⌄</Text>
        </View>

        <Text style={styles.amount}>12,695</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>293.0187</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Swap button */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Swap currencies"
        style={styles.swapButton}
        onPress={() => {}}
      >
        <MaterialCommunityIcons
          name="swap-vertical"
          size={25}
          color="#FFFFFF"
        />
      </Pressable>

      {/* USD section */}
      <View style={styles.currencySection}>
        <View style={styles.currencyInfo}>
          <View style={styles.dollarIcon}>
            <MaterialCommunityIcons
              name="currency-usd"
              size={25}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.currencyName}>USD</Text>
          <Text style={styles.chevron}>⌄</Text>
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
    backgroundColor: "#101014",
    alignItems: "center",
    justifyContent: "center",
  },
  dollarIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  currencyName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
  },
  chevron: {
    color: "#D2C8D9",
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
