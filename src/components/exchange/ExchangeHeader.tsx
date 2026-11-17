import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExchangeHeader() {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.headerButton}
      >
        <Text style={styles.backIcon}>‹</Text>
      </Pressable>

      <Text style={styles.headerTitle}>Exchange</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        style={styles.notificationButton}
      >
        <Text style={styles.notificationIcon}>♧</Text>
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
  backIcon: {
    color: "#C9C0D6",
    fontSize: 38,
    lineHeight: 40,
    fontWeight: "300",
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
  notificationIcon: {
    color: "#A68ABF",
    fontSize: 25,
  },
  notificationDot: {
    position: "absolute",
    top: 9,
    right: 7,
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#E68AB5",
  },
});
