### eslint 설정

> npx install-peerdeps --dev eslint-config-airbnb
> yarn eslint --init

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

- navigation/MessageNavigation.js
  - withNavigation HOC
- screens/Messages/
  - Message.js
  - Messages.js
- screens/
  - Home => Tabs/Home.js
  - Notifications => Tbas/Notifications.js
  - Profile => Tbas/Profile.js
  - Search => Tbas/Search.js

### # 11.5 Message Navigation pt.2

- components/MessageLink.js
- navigation/MainNavigation.js
  - MessageNavigation 추가
- navigation/TabNavigation.js
  - Home 스크린 우측 헤더에 MessageLink 컴포넌트 추가
    - headerRight

#### 실행결과

![헤더 오른쪽에 MessageLink 활성화](https://imgur.com/XZNkF4c.gif)

### # 11.6 Navigation Conclusions

### # 12.0 AuthHome

- /constants.js

- /screens/Auth/AuthHome.js

#### 실행결과

![](https://imgur.com/sHAzceu.gif)

### # 12.1 Auth Components pt.1

> yarn add prop-types

- components/
  - AuthButton.js
  - AuthInput.js
- screens/Auth
  - AuthHome.js, Login.js
    - AuthButton 반영
    - AuthInput 반영

#### 실행결과

![로그인 인풋 삽입](https://imgur.com/vUtFFrQ.gif)

### # 12.2 Auth Components pt.2

- /hooks/useInput.js
- TextInput 컴포넌트 입력 값 변경을 반영해보자.

#### 실행결과

![](https://imgur.com/uATWmMI.gif)

### # 12.3 Login pt.1

- Login.js
  - email vaildation check
    - 로그인 인풋에 입력값을 넣은 후, 로그인 버튼을 눌렀을 떄
  - 로그인 인풋에 커서를 둔 상태에서 바깥 영역 클릭 시 포커싱 아웃
    - TouchableWithoutFeedback
    - Keyboard.dismiss
- AuthInput.js
  - 인풋 포커싱 상태에서는 폰의 키보드가 활성화 되는데, return(enter) 키를 누르면 키보드를 없앤다.
    - returnKeyType
  - 핸드폰 키보드 창의 return 키를 눌러서 키보드 창을 없앤 후 handleLogin() 실행
    - onEndEditing
  - 이메일 인풋은 기본적으로 단어 correct 추천 기능을 제공한다. Gmail => gmail 등, 이것을 false 로 변경
    - autoCorrect

### # 12.4 Login pt.2

- Login.js
  - 로그인 요청 중일 때 버튼 안에 로더 표현
    - ActivityIndicator 컴포넌트

#### 실행결과

![로그인 요청 중일 때 로더 표현](https://imgur.com/Kb8AP3N.jpg)

- AuthButton.js
  - 로그인 요청 중일 때 인풋 수정 / 로그인 버튼 클릭을 비활성화
    - disabled

#### 실행결과

![로그인 요청 중일 때, 다른 이벤트 비활성화]()

- /screens/Auth/AuthQueries.js
  - LOG_IN 뮤테이션

### # 12.5 Login pt.3

- 인풋 포커싱 상태에서 외부 영역 클릭 시 에러 발생
  - onEndEditing => onSubmitEditing 으로 변경
- apollog uri 옵션 수정
  - /graphql 제거
- requestSecret() 리스폰스 결과 수정

### # 12.6 Confirm

- /screens/Auth/Confirm.js
  - Login 페이지에서 이메일 입력 후 confirm 페이지로 이동할 때, email 값을 함께 전달해주어야 한다.
  - navigation.getParam
- /AuthContext.js
  - 로그인 성공 시 반환으로 받은 token 값도 로컬 storage에 저장
  - logUseIn()
    - AsyncStorage.setItem('jwt', token)
- /screens/Auth/AuthQueries.js
  - CREATE_USER 뮤테이션 정의
  - CONFIRM_SECRET 뮤테이션 정의

### # 12.7 Signup

- App.js, preLoad() 에서 강제 로그아웃 시키기
  - await AsyncStorage.clear()
