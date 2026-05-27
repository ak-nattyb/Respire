import ContentContainer from "@/components/ContentContainer";
import { n } from "@/utils/scaling";
import { View, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: n(200),
    height: n(200),
    borderRadius: n(100),
    backgroundColor: "red",
  },
});
