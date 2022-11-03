# 1. 팀 소개

---

### 프로젝트 명

Tweeter ThanksGiving Project

### 팀원


이승훈, 김대호, 김지원, 김효성, 장기석, 정윤아, 김응수

# 2. 기술스택 & 라이브러리
<ul>
  <li>Front-END
    <ul>
      <li>React.js</li>
      <li>SCSS</li>
    </ul>
  </li>
  <li>BACK-END
    <ul>
      <li>Node.js</li>
      <li>Express</li>
      <li>JSON WEB TOKEN</li>
      <li>Bcrypt</li>
      <li>Mysql</li>
      <li>AWS</li>
      <li>multer</li>
    </ul>
  </li>
  <li>공통
    <ul>
      <li>RestFul API</li>
    </ul>
  </li>
</ul>


# 3. 서비스 소개

---

### 제공하는 메인 서비스를 소개해주세요

<aside>
👉 트위터의 주요 기능 구현

</aside>

# 4. 필수 구현 사항

---

### 이번 프로젝트 기본 구현사항

<aside>


0. 로그인/회원가임 

- 로그인/회원가입 기능 구현을 통한 회원정보 관리

<img width="1424" alt="스크린샷 2022-11-03 오후 9 25 49" src="https://user-images.githubusercontent.com/98578138/199720669-9db9df2c-98ca-41ca-9725-d120024a009a.png"><img width="1083" alt="스크린샷 2022-11-03 오후 9 26 09" src="https://user-images.githubusercontent.com/98578138/199720680-f8549dcf-7065-420b-a830-5115a77f8fb5.png">



1. 메인 페이지

- 트윗 목록 렌더링

- 트윗 submit
 -> formData() 메소드를 사용하여 이미지 + 텍스트 모두 전송
 -> 실제 작성한 피드데이터를 서버에 전송 후 통신최소화를 위헤 프론트영역에서 피드데이터 임시 표출
 -> 페이지 리렌더링 시 서버에 전송된 트윗데이터가 출력됨.
 
 
 <img width="1161" alt="스크린샷 2022-11-03 오후 9 26 32" src="https://user-images.githubusercontent.com/98578138/199720905-22e6c4fb-3786-4e3c-ad12-c832478a270b.png">
 
 

2. 마이 페이지

- 프로필 정보 수정
 -> formData() 메소드를 사용하여 프로필, 헤더 이미지 + 닉네임 및 소개 변경
 -> 프로필 이미지 변경 전 미리보기 기능 구현

- 해당 유저가 작성한 트윗내용, 미디어, 마음(좋아요) 탭 구성


<img width="1221" alt="스크린샷 2022-11-03 오후 9 27 11" src="https://user-images.githubusercontent.com/98578138/199721189-90db43a4-e3bd-41d7-b9d9-6216d0d787e9.png">
<img width="1023" alt="스크린샷 2022-11-03 오후 9 28 02" src="https://user-images.githubusercontent.com/98578138/199721226-14ba98f0-d1ad-4f9b-8c83-339e84385035.png">


3. 사이드바

- Search 기능 구현
 -> 실제 회원가입한 유저 정보 검색 가능 

- Link 컴포넌트를 활용한 각 페이지 별 라우팅 기능 구현


<img width="328" alt="스크린샷 2022-11-03 오후 9 27 34" src="https://user-images.githubusercontent.com/98578138/199721353-ab9dcdf5-f9f8-493d-a5d5-6dd9681948d2.png">


</aside>

# 5. 추가 구현 사항

---


### 기본 기능 구현 후 추가 구현 사항

<aside>

0. 트렌드 리스트 기능 구현 

</aside>

# 6. 변경 사항

---

### 현재 서비스에서 변경되는 점

<aside>

0. 추후 리팩토링 진행 예정

</aside>


# 7. 프로젝트 진행 간 시 주의사항

Planning Meeting을 통해 sprint 시작 전 구체적인 sprint 목표 설정

Daily Standup Meeting을 통한 작업 진행현황 공유 및 Daily 목표 설정

Retrospective Meeting을 통해 sprint 진행간 보완점 피드백 및 다음 sprint 계획 수립



# 8. Reference 

이 프로젝트는 트위터 사이트를 참조하여 학습목적으로 만들었습니다.

실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 직접 촬영한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
