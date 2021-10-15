// css
export default {
  path: '/css',
  name: 'CSS',
  component: () => import('@/views/CSS/index.vue'),
  meta: {
    navState: true,
    navName: 'CSS',
    icon: 'el-icon-s-open'
  },
  children: [
    {
      path: 'css-pure',
      name: 'CSSPure',
      component: () => import('@/views/CSS/Pure/index.vue'),
      meta: {
        navState: true,
        navName: '纯CSS',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'batman',
          name: 'Batman',
          component: () => import('@/views/CSS/Pure/pages/Batman/Batman.vue'),
          meta: {
            navState: true,
            navName: '蝙蝠侠'
          }
        },
        {
          path: 'gradientText',
          name: 'GradientText',
          component: () => import('@/views/CSS/Pure/pages/GradientText/GradientText.vue'),
          meta: {
            navState: true,
            navName: '渐变文字'
          }
        },
        {
          path: 'zebraShadowText',
          name: 'ZebraShadowText',
          component: () => import('@/views/CSS/Pure/pages/ZebraShadowText/ZebraShadowText.vue'),
          meta: {
            navState: true,
            navName: '斑马投影文字'
          }
        },
        {
          path: 'materialInput',
          name: 'MaterialInput',
          component: () => import('@/views/CSS/Pure/pages/MaterialInput/MaterialInput.vue'),
          meta: {
            navState: true,
            navName: 'Material风格输入框'
          }
        },
        {
          path: 'carousel',
          name: 'Carousel',
          component: () => import('@/views/CSS/Pure/pages/Carousel/Carousel.vue'),
          meta: {
            navState: true,
            navName: '走马灯（手动控制）'
          }
        },
        {
          path: 'tapeEdge',
          name: 'TapeEdge',
          component: () => import('@/views/CSS/Pure/pages/TapeEdge/TapeEdge.vue'),
          meta: {
            navState: true,
            navName: '缝边边框'
          }
        },
        {
          path: 'multilayerBorder',
          name: 'MultilayerBorder',
          component: () => import('@/views/CSS/Pure/pages/MultilayerBorder/MultilayerBorder.vue'),
          meta: {
            navState: true,
            navName: '多重边框'
          }
        },
        {
          path: 'filletedCorner',
          name: 'FilletedCorner',
          component: () => import('@/views/CSS/Pure/pages/FilletedCorner/FilletedCorner.vue'),
          meta: {
            navState: true,
            navName: '内圆角'
          }
        },
        {
          path: 'parallelogram',
          name: 'Parallelogram',
          component: () => import('@/views/CSS/Pure/pages/Parallelogram/Parallelogram.vue'),
          meta: {
            navState: true,
            navName: '平行四边形'
          }
        },
        {
          path: 'frostedGlass',
          name: 'FrostedGlass',
          component: () => import('@/views/CSS/Pure/pages/FrostedGlass/FrostedGlass.vue'),
          meta: {
            navState: true,
            navName: '毛玻璃'
          }
        },
        {
          path: 'photoFrame',
          name: 'PhotoFrame',
          component: () => import('@/views/CSS/Pure/pages/PhotoFrame/PhotoFrame.vue'),
          meta: {
            navState: true,
            navName: '相框'
          }
        },
        {
          path: 'turnBorder',
          name: 'TurnBorder',
          component: () => import('@/views/CSS/Pure/pages/TurnBorder/TurnBorder.vue'),
          meta: {
            navState: true,
            navName: '旋转边框'
          }
        }
      ]
    }
  ]
}