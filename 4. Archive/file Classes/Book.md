---
fields:
  - name: class
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": E-book
        "2": P-book
    path: ""
    id: aksGmg
  - name: title
    type: Input
    options: {}
    path: ""
    id: em4wOn
  - name: writor
    type: Input
    options: {}
    path: ""
    id: q26BrJ
  - name: price
    type: Number
    options: {}
    path: ""
    id: Payew7
  - name: platform
    type: Input
    options: {}
    path: ""
    id: xiIhLT
  - name: isBuy
    type: Boolean
    options: {}
    path: ""
    id: ByqWk2
  - name: isRead
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": done
        "2": reading
        "3": notYet
    path: ""
    id: VFgzlm
  - name: start_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: 4IIBfF
  - name: end_date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: lLciFz
version: "2.41"
limit: 20
mapWithTag: false
icon: package
tagNames:
  - Book
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - xiIhLT
  - aksGmg
  - em4wOn
  - q26BrJ
  - Payew7
  - ByqWk2
  - VFgzlm
  - 4IIBfF
  - lLciFz
---