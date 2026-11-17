import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function ExchangeHeader() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <View
      style={[styles.container, notificationsOpen && styles.activeContainer]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.iconButton}
        onPress={() => {}}
      >
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Exchange</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        accessibilityState={{ expanded: notificationsOpen }}
        style={styles.iconButton}
        onPress={() => setNotificationsOpen(!notificationsOpen)}
      >
        <Svg width={27} height={27} viewBox="0 0 24 24">
          <Path
            d="M19 11V12.76C19 13.55 19.32 14.31 19.88 14.88L20.48 15.48C20.81 15.81 21 16.26 21 16.73C21 17.71 20.21 18.5 19.23 18.5H4.77C3.79 18.5 3 17.71 3 16.73C3 16.26 3.19 15.81 3.52 15.48L4.12 14.88C4.68 14.31 5 13.55 5 12.76V10C5 6.13 8.13 3 12 3"
            fill="#B99ACF"
            stroke="#B99ACF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M15.5 18.5C15.5 20.43 13.93 22 12 22C10.07 22 8.5 20.43 8.5 18.5"
            fill="#B99ACF"
            stroke="#B99ACF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle cx="18" cy="5" r="3" fill="#B99ACF" />
        </Svg>
      </Pressable>

      {notificationsOpen && (
        <View style={styles.notificationPanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>Notifications</Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close notifications"
              onPress={() => setNotificationsOpen(false)}
            >
              <Text style={styles.closeButton}>×</Text>
            </Pressable>
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationDot} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Exchange ready</Text>
              <Text style={styles.notificationMessage}>
                Your exchange screen is ready to use.
              </Text>
              <Text style={styles.notificationTime}>Just now</Text>
            </View>
          </View>

          <View style={styles.notificationDivider} />

          <View style={styles.notificationItem}>
            <View style={styles.notificationDot} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Market update</Text>
              <Text style={styles.notificationMessage}>
                Check the latest exchange rate before proceeding.
              </Text>
              <Text style={styles.notificationTime}>Recently</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    position: "relative",
  },
  activeContainer: {
    zIndex: 1000,
    elevation: 1000,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1001,
  },
  backArrow: {
    color: "#E5DCEC",
    fontSize: 38,
    fontWeight: "300",
    lineHeight: 42,
  },
  title: {
    position: "absolute",
    left: 44,
    right: 44,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
  notificationPanel: {
    position: "absolute",
    top: 52,
    right: 0,
    width: 270,
    backgroundColor: "#17141E",
    borderRadius: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.16)",
    zIndex: 1002,
    elevation: 30,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
  },
  panelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  panelTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  closeButton: {
    color: "#B99ACF",
    fontSize: 25,
    lineHeight: 27,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B99ACF",
    marginTop: 5,
  },
  notificationContent: {
    flex: 1,
    gap: 4,
  },
  notificationTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  notificationMessage: {
    color: "#B7AEBF",
    fontSize: 12,
    lineHeight: 17,
  },
  notificationTime: {
    color: "#82788D",
    fontSize: 10,
    marginTop: 3,
  },
  notificationDivider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 13,
  },
});
