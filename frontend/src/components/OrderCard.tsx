import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";

import Colors from "@/src/constants/Colors";

interface IOrderProps {
  createdat: string;
  image: string;
  price: string;
  quantity: number;
  title: string;
  total_price: string;
}

export default function OrderCard({ order }: { order: IOrderProps }) {
  const colorTheme = useColorScheme();
  const color = Colors[colorTheme ?? "light"];

  const { createdat, image, price, quantity, title, total_price } = order;

  return (
    <View style={[styles.itemContainer, { borderBottomColor: color.border }]}>
      <Text style={[styles.date, { color: color.secondaryText }]}>
        {new Date(createdat).toLocaleString()}
      </Text>

      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.titlePrice}>
          <Text style={[styles.title, { color: color.primaryText }]}>
            {title}
          </Text>
          <View style={styles.priceQuantity}>
            <Text style={[styles.price, { color: color.primaryText }]}>
              {price}€
            </Text>
            <Text style={[styles.ex, { color: color.secondaryText }]}>x</Text>
            <Text style={[styles.quantityText, { color: color.secondaryText }]}>
              {quantity}
            </Text>
          </View>
        </View>

        <Text style={[styles.total, { color: color.accent }]}>
          {total_price}€
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: "3%",
    gap: 10,
    borderBottomWidth: 1,
  },
  date: {
    fontFamily: "QuickSandMedium",
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  titlePrice: {
    gap: 0,
  },
  title: {
    fontFamily: "QuickSandBold",
    fontSize: 16,
  },
  priceQuantity: {
    flexDirection: "row",
    gap: 15,
  },
  price: {
    fontFamily: "QuickSandMedium",
    fontSize: 20,
  },
  ex: {
    fontFamily: "QuickSandMedium",
    fontSize: 20,
  },
  quantityText: {
    paddingBottom: 5,
    fontFamily: "QuickSandMedium",
    fontSize: 20,
  },
  total: {
    fontFamily: "QuickSandBold",
    fontSize: 20,
    marginLeft: "auto",
  },
});