# Wallety - Budget Tracker

![version](https://img.shields.io/badge/version-1.0.0-blue) ![licence](https://img.shields.io/badge/licence-MIT-blue)

Wallety is a budget tracker for personal finance and budget planning.

![Wallety Cover](https://user-images.githubusercontent.com/32510139/167453860-a52f456b-ed6c-48b4-883a-a03a91ecc510.jpg)

## Table of Contents
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Color Reference](#color-reference)
- [Author](#author)
- [License](#license)

## Screenshots

![Wallety Presentation](https://user-images.githubusercontent.com/32510139/167453779-99205f97-fc29-4c9e-a3d3-0eb19c668550.jpg)

## Tech Stack

**Frontend:** React Native

**Environment:** Android, iOS


## Quick start

Clone the repo
```bash
  git clone https://github.com/blaiti/waletty
```

Install Waletty with npm

```bash
  cd Waletty
  npm install
```
    
## Run Locally

To run locally on Android, run the following command

```bash
  npx react-native run-android
```

To run locally on iOS, run the following command

```bash
  npx react-native run-ios
```

## Deployment

To generate .apk file run

```bash
  cd android
  ./gradlew assembleRelease
```

To generate .aab file run

```bash
  cd android
  ./gradlew bundleRelease
```


## File Structure

Within the download you'll find the following directories and files:

```bash
Wallety
.
├── index.js
├── app.json
├── package.json
├── package_lock.json
├── babel.config.js
├── metro.config.js
├── android
├── ios
└── src
    ├── App.js
    ├── assets
    │   ├── fonts
    │   │   ├── Gilroy-Regular.ttf
    │   │   └── Gilroy-SemiBold.ttf
    │   └── images
    │       └── logo.png
    ├── components
    │   ├── Bar
    │   │   └── index.js
    │   ├── Button
    │   │   └── index.js
    │   ├── Cards
    │   │   ├── BalanceCard
    │   │   │   └── index.js
    │   │   ├── MoneyBoxCard
    │   │   │   └── index.js
    │   │   ├── NotificationCard
    │   │   │   └── index.js
    │   │   ├── PieCard
    │   │   │   └── index.js
    │   │   └── TransactionCard
    │   │       └── index.js
    │   ├── CircularProgress
    │   │   └── index.js
    │   └── Headers
    │       ├── BackHeader
    │       │   └── index.js
    │       ├── BlockText
    │       │   └── index.js
    │       └── HomeHeader
    │           └── index.js
    ├── config
    │   └── routes.js
    ├── context
    │   ├── auth-context.js
    │   └── auth-provider.js
    ├── dbHelpers
    │   ├── moneyboxHelper.js
    │   ├── openDB.js
    │   └── TransactionHelper.js
    ├── navigations
    │   └── index.js
    ├── screens
    │   ├── auth
    │   │   ├── index.js
    │   │   └── login.js
    │   ├── home
    │   │   ├── index.js
    │   │   └── notifications.js
    │   ├── moneybox
    │   │   ├── add-moneybox.js
    │   │   └── index.js
    │   ├── settings
    │   │   └── index.js
    │   ├── splash
    │   │   └── index.js
    │   └── transactions
    │       ├── add-transaction.js
    │       ├── expense.js
    │       ├── income.js
    │       └── index.js
    ├── styles
    │   ├── colors.js
    │   ├── index.js
    │   └── typography.js
    └── utils
        ├── ccategories.js
        ├── currency.js
        └── quickActions.js
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| PRIMARY | ![#256BFE](https://via.placeholder.com/10/256BFE?text=+) #256BFE |
| WHITE | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| BLACK | ![#18191E](https://via.placeholder.com/10/18191E?text=+) #18191E |
| LIGHT_BLACK| ![#282A37](https://via.placeholder.com/10/282A37?text=+) #282A37 |


## Author

- [@blaiti](https://github.com/blaiti)


## License

[MIT](https://github.com/blaiti/Wallety/blob/main/LICENSE)

