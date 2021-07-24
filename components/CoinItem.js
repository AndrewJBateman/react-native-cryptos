import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
	return (
		<View style={styles.containerItem}>
			<Image style={styles.image} source={{ uri: coin.image }} />
			<Text style={styles.text}>{coin.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerItem: {
		backgroundColor: "#121212",
		paddingTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	containerNames: {
		marginLeft: 10,
	},
	coinName: {
		flexDirection: "row",
	},
	text: {
		color: "#fff",
	},
	textPrice: {
		color: "#fff",
		fontWeight: "bold",
	},
	pricePercentage: {
		textAlign: "right",
	},
	priceUp: {
		color: "#00B589",
	},
	priceDown: {
		color: "#fc4422",
	},
	image: {
		width: 30,
		height: 30,
	},
	textSymbol: {
		color: "#434343",
		textTransform: "uppercase",
	},
});

export default CoinItem;
