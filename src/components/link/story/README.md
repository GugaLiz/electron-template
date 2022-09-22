## Link 链接

> 当前组件常用于组件按钮点击效果

## 依赖

```bash
  yarn add rmc-feedback@2.0.0
```

## 用法

```javascript
import React from 'react';
import Link from '../index';
import { delay } from '@src/utils/common-util';

export default [
  'Link 链接',
  [
    {
      key: '基本',
      component: <Link onClick={() => alert('艾伦很帅')}>点我时有默认点击透明效果</Link>
    },
    {
      key: '点击音效',
      component: (
        <Link audio={require('./audios/touch-nav.mp3')} preloadAudio>
          点击音效
        </Link>
      )
    },
    {
      key: '仅点击一次',
      component: (
        <Link onClick={() => alert('艾伦很帅')} clickOnce>
          只能点击一次
        </Link>
      )
    },
    {
      key: '异步锁',
      component: (
        <Link onClick={async () => delay(2000).then(() => alert('请求完成, 可以点击了'))} lockAsync>
          异步 onClick 时无法再次点击
        </Link>
      )
    },
    {
      key: '禁用',
      component: (
        <Link onClick={() => alert('艾伦很帅')} disabled>
          禁用, 点击无效
        </Link>
      )
    }
  ],
  require('./README.md')
];

```

## API

```javascript
待完成
```

## 作者
艾伦