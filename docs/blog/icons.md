---
title: Material Design Icons — JS SVG
head:
  - - meta
    - name: description
      content: 'Material Design Icons — JS SVG'
tags:
categories:
- innovate
---

## Material Design Icons — JS SVG

Используйте пути SVG, как указано в @mdi/js. 

```
import { mdiAccount } from '@mdi/js'
```

Это рекомендуемая установка при оптимизации вашего приложения для производства.


$ yarn add @mdi/js -D
// OR
$ npm install @mdi/js -D

### Укажите Icons mdiSvg :

```
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
})
```

И тогда Вы можете импортировать только те значки, которые вы используете, предоставляя гораздо меньший размер пакета.

<!-- Vue Component -->
```
<template>
  <v-icon>{{ svgPath }}</v-icon>
</template>

<script>
  import { mdiAccount } from '@mdi/js'

  export default {
    data: () => ({
      svgPath: mdiAccount
    }),
  }
</script>
```
