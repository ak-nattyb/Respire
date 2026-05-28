import { HapticPressable } from "@/components/HapticPressable";
import { StyledText } from "@/components/StyledText";
import { n } from "@/utils/scaling";
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Pressable } from "react-native";

interface RespireButtonProps {
  packName: string;
  packColor?: string;
}

export default function RespireButton({
  packName,
  packColor,
}: RespireButtonProps) {
  const breathAnim = useRef(new Animated.Value(0.5)).current;
  const [centerText, setCenterText] = useState(packName);

  function breathingSequenceAnim() {
    Animated.sequence([
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(breathAnim, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      console.log("well done");
    });
  }

  const buttonSize = breathAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [n(150), n(250)],
  });

  const cornerRadiusSize = breathAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [n(75), n(125)],
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={breathingSequenceAnim}>
        <Animated.View
          style={[
            styles.circle,
            {
              width: buttonSize,
              height: buttonSize,
              borderRadius: cornerRadiusSize,
            },
          ]}
        >
          <StyledText style={styles.text}>{centerText}</StyledText>
        </Animated.View>
      </Pressable>
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
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: n(20),
  },
});
