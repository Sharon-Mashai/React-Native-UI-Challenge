import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StyleSheet,
  View,
  type LayoutChangeEvent,
} from "react-native";

import ExchangeHeader from "@/components/exchange/ExchangeHeader";
import ExchangeCurrencyPanel from "@/components/exchange/ExchangeCurrencyPanel";
import ExchangeRate from "@/components/exchange/ExchangeRate";
import BuyEthButton from "@/components/exchange/BuyEthButton";
import TransactionDetails from "@/components/exchange/TransactionDetails";

export default function HomeScreen() {
  // Keep the initial server and browser renders identical.
  const [horizontalPadding, setHorizontalPadding] = useState(24);

  // Update responsive padding after the screen has been laid out.
  const handleLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    const padding = width < 350 ? 16 : width < 400 ? 20 : 24;

    setHorizontalPadding(padding);
  };

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
        <View
          onLayout={handleLayout}
          style={[styles.screen, { paddingHorizontal: horizontalPadding }]}
        >
          <ExchangeHeader />
          <ExchangeCurrencyPanel />
          <ExchangeRate />
          <BuyEthButton />
          <TransactionDetails />
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
    paddingTop: 22,
    paddingBottom: 40,
  },
});
