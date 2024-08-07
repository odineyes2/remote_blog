---
faviObjs:
  - title: 소고기 윗등심(수입)
    favicon: 🐮
---
---
---
#favi

🥒🍖🐮🐷🐖

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
