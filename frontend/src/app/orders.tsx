import { FlatList, StyleSheet, Text, useColorScheme, View } from "react-native";

import Colors from "@/src/constants/Colors";
import { useGetUserOrders } from "@/src/api/order";
import OrderCard from "../components/OrderCard";

export default function Orders(): JSX.Element {
  const colorTheme = useColorScheme();
  const color = Colors[colorTheme ?? "light"];

  const { data: orders } = useGetUserOrders();

  if (!orders || orders.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: color.secondaryBg }]}>
        <Text style={[styles.title, { color: color.primaryText }]}>Orders</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: color.secondaryBg }}
      contentContainerStyle={styles.ordersContainer}
      data={orders}
      renderItem={({ item }) => <OrderCard order={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "QuickSandBold",
    fontSize: 60,
    opacity: 0.35,
  },
  ordersContainer: {
    paddingHorizontal: "5%",
  },
});
