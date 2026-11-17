import { useState, type ComponentProps } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Dollar01Icon } from "@hugeicons/core-free-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

type Currency = {
  symbol: string;
  name: string;
  amount: string;
  balance: string;
  icon: IconName;
  iconBackground: "black" | "grey";
};

const currencies: Currency[] = [
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: "12,695",
    balance: "293.0187",
    icon: "ethereum",
    iconBackground: "black",
  },
  {
    symbol: "USD",
    name: "US Dollar",
    amount: "43,937.4",
    balance: "12,987.21",
    icon: "currency-usd",
    iconBackground: "grey",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: "67,450",
    balance: "0.8542",
    icon: "bitcoin",
    iconBackground: "grey",
  },
];

function CurrencyIcon({
  currency,
  size,
}: {
  currency: Currency;
  size: number;
}) {
  if (currency.symbol === "USD") {
    return <HugeiconsIcon icon={Dollar01Icon} size={size} color="#FFFFFF" />;
  }

  return (
    <MaterialCommunityIcons name={currency.icon} size={size} color="#FFFFFF" />
  );
}

export default function ExchangeCurrencyPanel() {
  const [topCurrency, setTopCurrency] = useState(currencies[0]);
  const [bottomCurrency, setBottomCurrency] = useState(currencies[1]);
  const [openDropdown, setOpenDropdown] = useState<"top" | "bottom" | null>(
    null,
  );

  const selectCurrency = (currency: Currency, position: "top" | "bottom") => {
    if (position === "top") {
      setTopCurrency(currency);
    } else {
      setBottomCurrency(currency);
    }

    setOpenDropdown(null);
  };

  const swapCurrencies = () => {
    setTopCurrency(bottomCurrency);
    setBottomCurrency(topCurrency);
    setOpenDropdown(null);
  };

  const renderCurrencySelector = (
    currency: Currency,
    position: "top" | "bottom",
  ) => {
    const isOpen = openDropdown === position;

    return (
      <View style={styles.selectorContainer}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Select ${currency.symbol} currency`}
          style={styles.currencySelector}
          onPress={() => setOpenDropdown(isOpen ? null : position)}
        >
          <View
            style={[
              styles.currencyIcon,
              currency.iconBackground === "black"
                ? styles.ethereumIcon
                : styles.dollarIcon,
            ]}
          >
            <CurrencyIcon currency={currency} size={25} />
          </View>

          <Text style={styles.currencyName}>{currency.symbol}</Text>

          <MaterialCommunityIcons
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={22}
            color="#D2C8D9"
          />
        </Pressable>

        {isOpen && (
          <View style={styles.dropdown}>
            {currencies.map((item) => (
              <Pressable
                key={item.symbol}
                style={[
                  styles.dropdownItem,
                  item.symbol === currency.symbol &&
                    styles.selectedDropdownItem,
                ]}
                onPress={() => selectCurrency(item, position)}
              >
                <View
                  style={[
                    styles.dropdownIcon,
                    item.iconBackground === "black"
                      ? styles.ethereumIcon
                      : styles.dollarIcon,
                  ]}
                >
                  <CurrencyIcon currency={item} size={19} />
                </View>

                <View style={styles.dropdownText}>
                  <Text style={styles.dropdownSymbol}>{item.symbol}</Text>
                  <Text style={styles.dropdownName}>{item.name}</Text>
                </View>

                {item.symbol === currency.symbol && (
                  <MaterialCommunityIcons
                    name="check"
                    size={18}
                    color="#C9A5E8"
                  />
                )}
              </Pressable>
            ))}
          </View>
        )}
      </View>
    );
  };

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

      <View
        style={[
          styles.currencySection,
          openDropdown === "top" && styles.activeSection,
        ]}
      >
        <View style={styles.currencyInfo}>
          {renderCurrencySelector(topCurrency, "top")}
        </View>

        <Text style={styles.amount}>{topCurrency.amount}</Text>

        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>{topCurrency.balance}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Swap currencies"
        style={styles.swapButton}
        onPress={swapCurrencies}
      >
        <MaterialCommunityIcons
          name="swap-vertical"
          size={25}
          color="#FFFFFF"
        />
      </Pressable>

      <View
        style={[
          styles.currencySection,
          openDropdown === "bottom" && styles.activeSection,
        ]}
      >
        <View style={styles.currencyInfo}>
          {renderCurrencySelector(bottomCurrency, "bottom")}
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
  activeSection: {
    zIndex: 50,
    elevation: 50,
  },
  currencyInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectorContainer: {
    position: "relative",
    zIndex: 100,
    elevation: 20,
  },
  currencySelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  currencyIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  ethereumIcon: {
    backgroundColor: "#000000",
  },
  dollarIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
  currencyName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
  },
  dropdown: {
    position: "absolute",
    top: 50,
    left: 0,
    width: 225,
    maxHeight: 300,
    backgroundColor: "#17141E",
    borderRadius: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    zIndex: 100,
    elevation: 25,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    paddingVertical: 10,
    gap: 10,
  },
  selectedDropdownItem: {
    backgroundColor: "rgba(164, 117, 195, 0.18)",
  },
  dropdownIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownText: {
    flex: 1,
    gap: 2,
  },
  dropdownSymbol: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  dropdownName: {
    color: "#AAA4B2",
    fontSize: 11,
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
    zIndex: 10,
    elevation: 10,
  },
});
