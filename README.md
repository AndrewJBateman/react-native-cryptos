# :zap: React Native Cryptos

* React-Native app to display cryptocurrency API data
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/react-native-cryptos?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/react-native-cryptos?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/react-native-cryptos?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/react-native-cryptos?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Cryptocurrency data from the [coingecko API](https://www.coingecko.com/en/api) and does not require an API key
* React [useEffect hook](https://reactjs.org/docs/hooks-effect.html) used for data fetching
* React [useState hook](https://reactjs.org/docs/hooks-state.html) used to initialise & update coins, refeshing and search states

## :camera: Screenshots

![React-Native img](./img/crypto.jpg)
![React-Native img](./img/react.jpg)

## :signal_strength: Technologies

* [Expo v42](https://docs.expo.io/) framework & platform for universal React applications, installed globally
* [React v16](https://reactjs.org/) JavaScript library for building user interfaces
* [Android Studio v4](https://developer.android.com/studio) used to simulate Android device

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Run `npm start` to start expo on a localhost port
* Android Studio has to be installed and set up then the AVD Manager is run from the Configure menu

## :computer: Code Examples

* Code by Fazt Code to display Cryptocurrency data. Includes ternery expression to show price change data in green or red

```javascript
const CoinItem = ({ coin }) => (
  <View style={styles.containerItem}>
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
  </View>
);
```

## :cool: Features

* Expo bar code used to connect mobile to project. The Expo framework seems to be easy to use.
* Android Studio simulation on mobile device

## :clipboard: Status & To-do list

* Status: Working
* To-do: Nothing.

## :clap: Inspiration

* [Fazt Code: React Native & CoinGecko | Aplicación de Precios de Criptomonedas](https://www.youtube.com/watch?v=k9ptn9zNHng&t=38s) in Spanish

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
