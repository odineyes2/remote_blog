---
fields:
  - name: mall
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": 홈플러스
        "2": 코스트코
        "3": 하모니마트
        "4": 매탄시장
    path: vZg6iC
    id: IULdZz
  - name: date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: vZg6iC
    id: HvNEuj
  - name: costObject
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: vZg6iC
  - name: cost
    type: Number
    options: {}
    path: vZg6iC
    id: FufwyV
  - name: amount
    type: Number
    options: {}
    path: vZg6iC
    id: pPDN5m
  - name: item
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": 소고기 윗등심(수입)
        "2": 소고기 찜갈비(수입)
        "3": 양지 국거리(국내산)
        "4": 삼겹살
        "5": 돼지 전지
        "6": 두부
        "7": 호박
        "8": 상추
        "9": 깻잎
    path: vZg6iC
    id: urinVJ
version: "2.33"
limit: 20
mapWithTag: false
icon: package
tagNames:
  - cost
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - vZg6iC
  - urinVJ
  - HvNEuj
  - FufwyV
  - pPDN5m
  - IULdZz
---