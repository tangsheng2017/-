import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  // 工单管理
  {
    path: '/',
    component: Layout,
    meta: {
      title: '工单管理',
      funcCode: 'N2',
      icon: 'User'
    },
    redirect: 'orderRescue',
    children: [
      {
        path: 'orderRescue',
        name: 'OrderRescue',
        component: () => import('@/views/order'),
        meta: {
          title: '救援工单',
          funcCode: 'N2-1',
          firstAccessibleRoute: '/orderRescue'
        }
      },
      {
        path: 'orderDetails/:id',
        name: 'OrderDetails',
        component: () => import('@/views/order/orderDetails'),
        meta: {
          title: '工单详情',
          funcCode: 'N2-1'
        },
        hidden: true // 不在侧边栏显示
      },
      {
        path: 'orderTimeOut',
        name: 'OrderTimeOut',
        component: () => import('@/views/orderTimeOut'),
        meta: {
          title: '工单超时',
          funcCode: 'N2-2'
        }
      }
    ]
  }
]

// 动态路由数据（拉取接口数据时动态添加到路由）
const asyncRoutes = [
  // 工单管理
  {
    path: '/',
    component: Layout,
    meta: {
      title: '工单管理',
      funcCode: 'N2',
      icon: 'User'
    },
    children: [
      {
        path: 'orderRescue',
        name: 'OrderRescue',
        component: () => import('@/views/order'),
        meta: {
          title: '救援工单',
          funcCode: 'N2-1',
          firstAccessibleRoute: '/orderRescue'
        }
      },
      {
        path: 'orderDetails/:id',
        name: 'OrderDetails',
        component: () => import('@/views/order/orderDetails'),
        meta: {
          title: '工单详情',
          funcCode: 'N2-1'
        },
        hidden: true // 不在侧边栏显示
      },
      {
        path: 'orderTimeOut',
        name: 'OrderTimeOut',
        component: () => import('@/views/orderTimeOut'),
        meta: {
          title: '工单超时',
          funcCode: 'N2-2'
        }
      }
    ]
  }
]

// 退出登录时重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.asyncRoutes = asyncRoutes

export default router
