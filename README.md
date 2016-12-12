# Chloé 🛋

Take your kids to dreamland with Chloé, the connected lamp 💡

## Requirements
- [Node](https://nodejs.org) `5.1.x` or newer
- [Yarn](https://yarnpkg.com) for dependencies management
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) `8.0` or newer for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) `2.2` or newer for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Genymotion](https://www.genymotion.com/) `2.7.x` or newer for Android emulation
- [Android](https://www.android.com/) `5.0` or newer on your Android device to test properly
- [ESLint](http://eslint.org/) `3.11.1` or newer to lint your code on fly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React Native](https://facebook.github.io/react-native/) `0.39.2` for building native apps using React
- [Redux](http://redux.js.org/) `3.5.x` a predictable state container for JavaScript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) `3.x.x` a router based on ExperimentalNavigation API
- [Flow](http://flowtype.org/) `0.36` a static type checker for JavaScript

## Make the magic happen
Just clone the repo and start :
```shell
git clone https://github.com/CharlesMangwa/rapsodie.git Rapsodie
cd Rapsodie
yarn        # Install Node.js components listed in your package.json with Yarn 😺
```

### Development
```shell
yarn start  # or: node_modules/react-native/packager/packager.sh
```
This will start a lightweight development server.

###### iOS:
Open `App.xcodeproj` in Xcode, build and run the project or run:
```shell
react-native run-ios
```

###### Android:
Start your emulator or connect your device. And run:
```shell
react-native run-android
```

## Create a release build
* Navigate to Product > Scheme > Edit Scheme... in Xcode and change Build Configuration to *Release*.
* Run in terminal :

###### iOS:
```shell
yarn build-ios
```
###### Android:
```shell
yarn build-android
```

* And tada 💥 !!

## Issues
If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.
