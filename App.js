import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	TextInput,
} from "react-native";

import CoinItem from "./components/CoinItem"

const App = () => {
	const [coins, setCoins] = useState([]);

	const loadData = async () => {
		const res = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		);
		const data = await res.json();
		setCoins(data);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={coins}
				renderItem={({ item }) => {
					return <CoinItem coin={item}/>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#141414",
		alignItems: "center",
		flex: 1,
	},
});

export default App;
