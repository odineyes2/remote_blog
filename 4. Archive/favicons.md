---
faviObjs:
  - title: 깐 메추리알
    favicon: 🥚
  - title: 떡갈비
    favicon: 🍖
  - title: 캔커피
    favicon: 🥫
  - title: 고구마
    favicon: "🍠 "
  - title: 청양고추
    favicon: "🌶 "
  - title: 양파
    favicon: 🧅
  - title: 우유
    favicon: "🥛 "
  - title: 사골육수
    favicon: 🍲
  - title: 계란
    favicon: 🥚
  - title: 깻잎
    favicon: 🥬
  - title: 애호박
    favicon: 🎃
  - title: 두부
    favicon: 🍥
  - title: 돼지 전지
    favicon: "🐖 "
  - title: 상추
    favicon: 🥬
  - title: 삼겹살
    favicon: 🐷
  - title: 소고기 국거리(국내산)
    favicon: 🐮
  - title: 소고기 본갈비살(수입)
    favicon: 🐮
  - favicon: 🐮
    title: 소고기 차돌양지(수입)
  - title: 오이
    favicon: "🥒 "
  - title: 소고기 찜갈비(수입)
    favicon: 🐮
  - title: 소고기 윗등심(수입)
    favicon: 🐮
---
#favi

## 연습코드
```dataviewjs
const dbs=dv.page("4. Archive/file Classes/예산관리스키마.md").file.frontmatter.fields[29].options.valuesList;
//dv.span(typeof(dbs));
//dv.span(dbs);
const fieldArr=Object.values(dbs);

//dv.span(typeof(fieldArr));
dv.span(fieldArr);

function makeObj(arr){
let faviObj=[]
arr.forEach((item)=>{
let favi={};
favi.title=item;
favi.favicon="";
faviObj.push(favi);
});
return faviObj;
}

const result=makeObj(fieldArr);

//dv.span(result);

```
