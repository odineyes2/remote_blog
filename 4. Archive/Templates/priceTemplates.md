---
costObject:
  - item: 깐메추리알
    date: 2024-08-04
    cost: 6000
    amount: 500
    mall: 홈플러스
  - mall: 코스트코
    date: 2024-08-04
    cost: 80333
    amount: 6700
    item: 소고기 차돌양지(수입)
  - item: 소고기 본갈비살(수입)
    date: 2024-08-04
    cost: 2749
    amount: 100
    mall: 코스트코
  - mall: 코스트코
    date: 2024-08-04
    cost: 64790
    amount: 1100
    item: 양지 국거리(국내산)
  - mall: 홈플러스
    date: 2024-08-04
    cost: 49900
    amount: 1400
    item: 소고기 찜갈비(수입)
  - item: 소고기 윗등심(수입)
    date: 2024-08-04
    cost: 97450
    amount: 5000
    mall: 코스트코
  - item: 소고기 윗등심(수입)
    date: 2024-08-04
    cost: 22000
    mall: 홈플러스
    amount: 800
---

#cost 

```dataviewjs
// 프로트매터 임포트
const curr=dv.current();
const currObjs=curr.file.frontmatter.costObject;
const itemObject=
currObjs.map(
p=>(p.item)
);
//const result=dv.isArray(itemObject);

// 중복값 제거
const itemSet=new Set(itemObject);
const itemArray=[...itemSet];

// 결과 출력
//dv.span(itemArray);
//dv.span(result);
//dv.span(currObjs);
//dv.span(itemObject);
const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_objects;
dv.span(tp);

//const tp=app.plugins.plugins["templater-obsidian"].templater.current_functions_object;
```

<% tp.system.suggester([1,2,3],[4,5,6]) %>