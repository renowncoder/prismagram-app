### # 10.0 Creating the Project

> yarn global add expo-cli
> expo init prismagram-app

- blank
- Y (yarn dependencies)

> yarn add styled-components react-navigation apollo-boost graphql react-apollo-hooks

### # 10.1 Preloading Assets

> yarn add @expo/vector-icons

- https://expo.github.io/vector-icons/

### # 10.2 Preloading Cache

> yarn add apollo-cache-persist apollo-cache-inmemory

- /apollo.js

### # 10.3 Recap

- preLoad
  - assets(이미지 등), 아폴로 클라이언트(cache), 최초 컴포넌트 마운트 시 유저들에게 보여줄 데이터를 불러오는 과정
  - 이 과정이 끝나야 화면이 나타남, 그 전까지는 계속 빈 화면(AppLoading)임

### # 10.4 isLoggedIn pt.1

- preLoad 단계에서 체크
- /styles.js
  - theme
- yarn add expo-asset expo-font
  - App.js
  - 과거 Asset, Font 컴포넌트가 패키지 분리 됨
- App.js
  - isLoggedIn, setIsLoggedIn
  - clientState 사용 X, 엑스포에서 캐시랑 같이 사용 시 문제 있음?
  - AsyncStorage

### # 10.5 isLoggedIn pt.2

- App.js
  - isLoggedIn 값을 true/false 로 변경
  - logUserIn()
    - AsyncStorage.setItem, isLoggedIn
    - setIsLoggedIn
  - logUserOut()
    - AsyncStorage.setItem, isLoggedIn
    - setIsLoggedIn
  - 다음 강의 예고
    - logUserIn(), logUserOut(), isLoggedIn 이 세가지 함수와 변수는 App.js 외에 깊게 들어간 컴포넌트에서도 사용할 것이기 때문에 cotext로 저장할 것이다.

### # 10.6 AuthContext pt.1

- /components/NavController.js
- /AuthContext.js
  - createContext, useContext,
  - isLoggedIn, setIsLoggedIn, logUserIn, logUserOut 옮기기
- App.js
  - AuthProvider

### # 10.7 AuthContext pt.2

- 세팅이 어렵다
- 다음은 쉽다

### # 11.0 Introduction To Navigation

- 네비게이션 종류
  - 탭 네비게이션: 사용할 예정
  - 스택 네비게이션: 사용할 예정
  - 드로우어 네비게이션: 사용하지 않을 예정

### # 11.1 AuthNavigation

- /navigation/
  - https://reactnavigation.org 참고
  - AuthNavigation.js
    - createStackNavigator
  - 네비게이터를 컴포넌트 안에서 렌더링하려면, 생성한 스택네비게이터를 createAppContainer 안에 담아야한다.
  - 네비게이션을 스크린(라우트)과 매핑 시켜주어야 한다.
- /screens/
  - Auth/
    - AuthHome.js
    - Login.js
    - Signup.js
    - Confirm.js

#### 실행결과

![](https://imgur.com/GbXrRp4.gif)

### # 11.2 Tabs Navigation

- /screens/
  - Home.js
  - Notifications.js
  - Profile.js
  - Search.js
- /navigation/
  - TabNavigation.js
    - createBottomTabNavigator

#### 실행결과

![](https://imgur.com/wb9V5HM.jpg)

### # 11.3 Photo Navigation

- /screens/Photo/
  - SelectPhoto.js
  - TakePhoto.js
  - UploadPhoto.js
- /navigation/
  - PhotoNavigation.js
  - MainNavigation.js

#### 실행결과

![](https://imgur.com/jAgKRuD.gif)

### # 11.4 Message Navigation pt.1

### # 11.5 Message Navigation pt.2

### # 11.6 Navigation Conclusions
