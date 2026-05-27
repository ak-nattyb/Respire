import { HapticPressable } from "@/components/HapticPressable";
import { StyledText } from "@/components/StyledText";
import { n } from "@/utils/scaling";
import { View, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <HapticPressable>
        <View style={styles.circle}>
          <StyledText style={styles.text}>Respire</StyledText>
        </View>
      </HapticPressable>
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
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: n(20),
  },
});
