
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
        <Text style={styles.bellIcon}>♟</Text>
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    color: '#D8D1DE',
    fontSize: 35,
    lineHeight: 40,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#F7F5F8',
    fontSize: 17,
    fontWeight: '500',
  },
  notificationButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    color: '#C9A6D5',
    fontSize: 22,
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 7,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#B77BE4',
  },
});
