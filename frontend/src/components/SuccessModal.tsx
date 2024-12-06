import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { router } from "expo-router";

import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export default function SuccessModal({
  isModalOpen,
  setIsModalOpen,
}: IModalProps) {
  const colorTheme = useColorScheme();
  const color = Colors[colorTheme ?? "light"];

  const goToHome = () => {
    setIsModalOpen(false);
    router.dismissAll();
    router.replace("/");
  };

  const goToOrders = () => {
    setIsModalOpen(false);
    router.replace("/orders");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <View style={styles.modalContainer}>
        <View
          style={[styles.modalContent, { backgroundColor: color.primaryBg }]}
        >
          <Ionicons
            name="close-outline"
            size={26}
            style={{ position: "absolute", top: 10, right: 10 }}
            color={color.secondaryText}
            onPress={() => setIsModalOpen(false)}
          />

          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="checkmark-circle-outline"
              size={100}
              color={color.success}
            />
            <Text style={[styles.success, { color: color.primaryText }]}>
              Success!
            </Text>
            <Text style={[styles.message, { color: color.secondaryText }]}>
              Your order has been placed!
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <Pressable
              onPress={goToOrders}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? color.accent : color.invertedBg },
              ]}
            >
              <Text style={[styles.buttonText, { color: color.invertedText }]}>
                Go to orders
              </Text>
            </Pressable>
            <Pressable
              onPress={goToHome}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? color.accent : color.invertedBg },
              ]}
            >
              <Text style={[styles.buttonText, { color: color.invertedText }]}>
                Go to home
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    position: "relative",
    width: "70%",
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 36,
    gap: 20,
    borderRadius: 10,
  },
  success: {
    fontFamily: "QuickSandBold",
    fontSize: 35,
  },
  message: {
    fontFamily: "QuickSandMedium",
    fontSize: 18,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  button: {
    width: "48%",
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: "QuickSandSemi",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
});