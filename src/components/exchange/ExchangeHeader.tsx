
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ArrowLeft01Icon, Notification03Icon,} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

export default function ExchangeHeader() {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.headerButton}
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={19}
          color="#C9C0D6"
          strokeWidth={1.5}
        />
      </Pressable>

      <Text style={styles.headerTitle}>Exchange</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        style={styles.notificationButton}
      >
        <HugeiconsIcon
          icon={Notification03Icon}
          size={23}
          color="#A68ABF"
          strokeWidth={1.5}
        />

        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "400",
  },
  notificationButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationDot: {
    position: "absolute",
    top: 13,
    right: 7,
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#E68AB5",
  },
});