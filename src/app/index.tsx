import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, ScrollView,StyleSheet, Text,View,} from "react-native";
import { useState } from "react";
import ExchangeHeader from "@/components/exchange/ExchangeHeader";
import CurrencyCard from "@/components/exchange/CurrencyCard";
import SwapButton from "@/components/exchange/SwapButton";

export default function HomeScreen() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleBuy = () => {
    Alert.alert(
      "Buy ETH",
      "This is a UI demonstration. No real transaction will be processed.",
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.outerBackground}>
        <View style={styles.exchangeScreen}>
          {/* Background purple lighting */}
          <View pointerEvents="none" style={styles.glowTop} />
          <View pointerEvents="none" style={styles.glowBottom} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Header */}
            <ExchangeHeader />

            {/* Currency cards */}
            <View style={styles.exchangeCard}>
              <CurrencyCard
                currency={isSwapped ? "USD" : "ETH"}
                amount={isSwapped ? "43,937.4" : "12,695"}
                balance={isSwapped ? "12,987.21" : "293.018"}
              />

              {/* Reusable swap button */}
              <SwapButton
                onPress={() => setIsSwapped((previous) => !previous)}
              />

              <CurrencyCard
                currency={isSwapped ? "ETH" : "USD"}
                amount={isSwapped ? "12,695" : "43,937.4"}
                balance={isSwapped ? "293.018" : "12,987.21"}
              />
            </View>

            {/* Exchange rate */}
            <Text style={styles.exchangeRate}>1 ETH = 3,461.02 USD</Text>

            {/* Buy button */}
            <Pressable
              accessibilityRole="button"
              onPress={handleBuy}
              style={({ pressed }) => [
                styles.buyButton,
                pressed && styles.buyButtonPressed,
              ]}
            >
              <Text style={styles.buyButtonText}>
                Buy {isSwapped ? "USD" : "ETH"}
              </Text>
            </Pressable>

            {/* Transaction details */}
            <View style={styles.transactionDetails}>
              <DetailRow label="Estimate fee" value="4.28 usd" />
              <DetailRow label="You will receive" value="43,941.68 USD" />
              <DetailRow label="Spread" value="0.2%" />
              <DetailRow label="Gas fee" value="0.0045 ETH" />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#100A13",
  },
  outerBackground: {
    flex: 1,
    padding: 5,
    backgroundColor: "#211027",
  },
  exchangeScreen: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 38,
    backgroundColor: "#0B090B",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingBottom: 24,
  },
  glowTop: {
    position: "absolute",
    top: -150,
    right: -100,
    width: 330,
    height: 330,
    borderRadius: 200,
    backgroundColor: "#62236E",
    opacity: 0.18,
  },
  glowBottom: {
    position: "absolute",
    bottom: -200,
    left: -120,
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: "#7C35C5",
    opacity: 0.22,
  },
  exchangeCard: {
    backgroundColor: "#201D25",
    borderRadius: 24,
    overflow: "visible",
  },
  exchangeRate: {
    color: "#F4F0F6",
    textAlign: "center",
    fontSize: 13,
    marginTop: 14,
    marginBottom: 25,
  },
  buyButton: {
    height: 50,
    borderRadius: 28,
    backgroundColor: "#F8F6F8",
    alignItems: "center",
    justifyContent: "center",
  },
  buyButtonPressed: {
    backgroundColor: "#D9D1DF",
    transform: [{ scale: 0.99 }],
  },
  buyButtonText: {
    color: "#171419",
    fontSize: 16,
    fontWeight: "500",
  },
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
