
## 1) 레지스트리 편집창 실행
- regedit

## 2) 경로 이동
- HKEY_LOCAL_MACHINE → SOFTWARE → Microsoft → Windows → CurrentVersion → App Paths

## 3) 키생성
- [App Paths]  > [마우스 오른쪽 버튼] > [새로만들기] > [키] 선택

## 4)  kakao.exe 키 값 등록
- 추가된 키값을 kakao.exe 로 이름 등록

## 5) 문자열 생성 및 path 변경
- [kakao.exe]  > [마우스 오른쪽 버튼] > [새로만들기] > [문자열 값] 선택
- 생성된 문자열 값이름을 'path'로 변경 

## 6) [기본값], [path]  > [마우스 오른쪽 버튼] > [수정] 선택
- [기본값] : exe 실행파일 등록
    - "C:\Program Files (x86)\Kakao\KakaoTalk\KakaoTalk.exe"
- [path] : exe파일이 위치해 있는 경로등록 
    - "C:\Program Files (x86)\Kakao\KakaoTalk"

## 7) 실행창에서 실행해보기

끝.