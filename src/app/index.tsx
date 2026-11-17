import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";

import ExchangeHeader from "@/components/exchange/ExchangeHeader";
import EthCurrencyCard from "@/components/exchange/EthCurrencyCard";
import UsdCurrencyCard from "@/components/exchange/UsdCurrencyCard";
import CurrencySwapButton from "@/components/exchange/CurrencySwapButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(105, 45, 155, 0.30)",
          "rgba(74, 35, 115, 0.12)",
          "transparent",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.topGlow}
        pointerEvents="none"
      />

      <LinearGradient
        colors={[
          "rgba(90, 42, 135, 0.20)",
          "rgba(55, 30, 85, 0.08)",
          "transparent",
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomGlow}
        pointerEvents="none"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screen}>
          <ExchangeHeader />

          <View style={styles.currencyCards}>
            <EthCurrencyCard />
            <CurrencySwapButton />
            <UsdCurrencyCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B10",
    overflow: "hidden",
  },
  topGlow: {
    position: "absolute",
    top: -180,
    right: -150,
    width: 420,
    height: 450,
    borderRadius: 225,
  },
  bottomGlow: {
    position: "absolute",
    bottom: -220,
    left: -190,
    width: 430,
    height: 450,
    borderRadius: 225,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  screen: {
    width: "100%",
    maxWidth: 480,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 40,
  },
  currencyCards: {
    gap: 0,
  },
});
