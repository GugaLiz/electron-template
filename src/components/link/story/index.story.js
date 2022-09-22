import React from 'react';
import Link from '../index';
import { delay } from '@src/utils/common-util';

export default [
  'Link 链接',
  [
    {
      key: '基本',
      component: (
        <Link style={{ fontSize: 32, userSelect: 'none' }} onClick={() => alert('艾伦很帅')}>
          <img src="https://jx3.xoyo.com/zt/2017/10/16/one_stop_service/assets/images/pc_effect.b801a414.jpg" alt="测试图片" />
        </Link>
      )
    },
    {
      key: '点击高亮效果',
      component: (
        <Link style={{ fontSize: 32, userSelect: 'none' }} onClick={() => alert('艾伦很帅')} clickEffect="brightness">
          <img src="https://jx3.xoyo.com/zt/2017/10/16/one_stop_service/assets/images/pc_effect.b801a414.jpg" alt="测试图片" />
        </Link>
      )
    },
    {
      key: '点击音效',
      component: (
        <Link style={{ fontSize: 32 }} audio={require('./audios/touch-nav.mp3')} preloadAudio>
          点击音效
        </Link>
      )
    },
    {
      key: '仅点击一次',
      component: (
        <Link style={{ fontSize: 32 }} onClick={() => alert('艾伦很帅')} clickOnce>
          只能点击一次
        </Link>
      )
    },
    {
      key: '异步锁',
      component: (
        <Link style={{ fontSize: 32 }} onClick={async () => delay(2000).then(() => alert('请求完成, 可以点击了'))} lockAsync>
          异步 onClick 时无法再次点击
        </Link>
      )
    },
    {
      key: '禁用',
      component: (
        <Link style={{ fontSize: 32 }} onClick={() => alert('艾伦很帅')} disabled>
          禁用, 点击无效
        </Link>
      )
    }
  ],
  require('./README.md')
];
