import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/workMange',
    component: Layout,
    redirect: '/workMange/workDash',
    name: 'WorkMange',
    meta: { title: '工作管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'workDash',
        component: () => import('@/views/workMange/workDash/index'),
        name: 'WorkDash',
        meta: { title: '工作首页', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'business',
            name: 'Business',
            component: () => import('@/views/workMange/workDash/business/index'),
            meta: { title: '我的事务' },
            children: [
              {
                path: 'checkmessage',
                name: 'CheckMessage',
                component: () => import('@/views/workMange/workDash/business/waitcheckmessage'),
                meta: { title: '受理审核信息提醒' }
              },
              {
                path: 'processManage',
                name: 'ProcessManage',
                component: () => import('@/views/workMange/workDash/business/processManage'),
                meta: { title: '项目流程管理事务提醒' }
              }
            ]
          },
          {
            path: 'scientificResearch',
            name: 'ScientificResearch',
            component: () => import('@/views/workMange/workDash/scientificResearch/index'),
            meta: { title: '我的科研' }
          },
          {
            path: 'resDynamic',
            name: 'ResDynamic',
            component: () => import('@/views/workMange/workDash/resDynamic/index'),
            meta: { title: '科研动态' }
          },
          {
            path: 'warnNews',
            name: 'WarnNews',
            component: () => import('@/views/workMange/workDash/warnNews/index'),
            meta: { title: '消息与预警' },
            children: [
              {
                path: 'news',
                name: 'News',
                component: () => import('@/views/workMange/workDash/warnNews/news'),
                meta: { title: '事务消息' }
              },
              {
                path: 'warn',
                name: 'Warn',
                component: () => import('@/views/workMange/workDash/warnNews/warn'),
                meta: { title: '预警信息' }
              }
            ]
          },
          {
            path: 'systemData',
            name: 'SystemData',
            component: () => import('@/views/workMange/workDash/systemData'),
            meta: { title: '系统信息' }
          }
        ]
      },

      {
        path: '/resTeam',
        component: () => import('@/views/workMange/resTeam/index'),
        name: 'ResTeam',
        meta: { title: '科研队伍', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'resMember',
            name: 'ResMember',
            component: () => import('@/views/workMange/resTeam/resMember'),
            meta: { title: '科研人员SM', icon: 'table' }
          },
          {
            path: 'mechanism',
            name: 'Mechanism',
            component: () => import('@/views/workMange/resTeam/mechanism'),
            meta: { title: '组织机构', icon: 'tree' }
          }
        ]
      },

      {
        path: '/platform',
        component: () => import('@/views/workMange/platform/index'),
        name: 'PlatForm',
        meta: { title: '科研平台M', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'lab',
            name: 'Lab',
            component: () => import('@/views/workMange/platform/lab'),
            meta: { title: '实验室', icon: 'table' }
          },
          {
            path: 'resBase',
            name: 'ResBase',
            component: () => import('@/views/workMange/platform/resBase'),
            meta: { title: '研究基地', icon: 'tree' }
          },
          {
            path: 'resCenter',
            name: 'ResCenter',
            component: () => import('@/views/workMange/platform/resCenter'),
            meta: { title: '研究中心', icon: 'tree' }
          },
          {
            path: 'projectCenter',
            name: 'ProjectCenter',
            component: () => import('@/views/workMange/platform/projectCenter'),
            meta: { title: '工程中心', icon: 'tree' }
          }
        ]
      },
      {
        path: '/verticalProject',
        component: () => import('@/views/workMange/verticalProject/index'),
        name: 'PlatForm',
        meta: { title: '纵向项目RSM', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'projectApproval',
            name: 'ProjectApproval',
            component: () => import('@/views/workMange/verticalProject/projectApproval'),
            meta: { title: '项目立项', icon: 'table' }
          },
          {
            path: 'projectChange',
            name: 'ProjectChange',
            component: () => import('@/views/workMange/verticalProject/projectChange'),
            meta: { title: '项目变更', icon: 'tree' }
          },
          {
            path: 'projectMidCheck',
            name: 'ProjectMidCheck',
            component: () => import('@/views/workMange/verticalProject/projectMidCheck'),
            meta: { title: '项目中检', icon: 'tree' }
          },
          {
            path: 'projectEnd',
            name: 'ProjectEnd',
            component: () => import('@/views/workMange/verticalProject/projectEnd'),
            meta: { title: '项目结项', icon: 'tree' }
          },
          {
            path: 'projectEndTurn',
            name: 'ProjectEndTurn',
            component: () => import('@/views/workMange/verticalProject/projectEndTurn'),
            meta: { title: '项目结转', icon: 'tree' }
          }
        ]
      },

      {
        path: '/horizontalProject',
        component: () => import('@/views/workMange/horizontalProject/index'),
        name: 'PlatForm',
        meta: { title: '横向项目RSM', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'contractMange',
            name: 'ContractMange',
            component: () => import('@/views/workMange/horizontalProject/contractMange'),
            meta: { title: '合同管理', icon: 'table' }
          },
          {
            path: 'contractChang',
            name: 'ContractChang',
            component: () => import('@/views/workMange/horizontalProject/contractChang'),
            meta: { title: '合同变更', icon: 'tree' }
          }
        ]
      },

      {
        path: '/resFunds',
        component: () => import('@/views/workMange/resFunds/index'),
        name: 'ResFunds',
        meta: { title: '科研经费', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'horizontalFunds',
            name: 'HorizontalFunds',
            component: () => import('@/views/workMange/resFunds/horizontalFunds'),
            meta: { title: '横向经费', icon: 'table' }
          },
          {
            path: 'verticalFunds',
            name: 'VerticalFunds',
            component: () => import('@/views/workMange/resFunds/verticalFunds'),
            meta: { title: '纵向经费', icon: 'tree' }
          }
        ]
      },

      {
        path: '/resAchievement',
        component: () => import('@/views/workMange/resAchievement/index'),
        name: 'ResAchievement',
        meta: { title: '科研成果RSM', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'paperMange',
            name: 'PaperMange',
            component: () => import('@/views/workMange/resAchievement/paperMange'),
            meta: { title: '论文成果管理', icon: 'table' }
          },
          {
            path: 'resreportMange',
            name: 'ResreportMange',
            component: () => import('@/views/workMange/resAchievement/resreportMange'),
            meta: { title: '研究报告管理', icon: 'tree' }
          },
          {
            path: 'resreportMange',
            name: 'ResreportMange',
            component: () => import('@/views/workMange/resAchievement/worksMange'),
            meta: { title: '著作成果管理', icon: 'tree' }
          },
          {
            path: 'appraisalMange',
            name: 'AppraisalMange',
            component: () => import('@/views/workMange/resAchievement/appraisalMange'),
            meta: { title: '鉴定成果管理', icon: 'tree' }
          },
          {
            path: 'artMange',
            name: 'ArtMange',
            component: () => import('@/views/workMange/resAchievement/artMange'),
            meta: { title: '艺术作品管理', icon: 'tree' }
          }
        ]
      },

      {
        path: '/intellectualPropertyRight',
        component: () => import('@/views/workMange/intellectualPropertyRight/index'),
        name: 'IntellectualPropertyRight',
        meta: { title: '知识产权RSM', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'patentAchievement',
            name: 'PatentAchievement',
            component: () => import('@/views/workMange/intellectualPropertyRight/patentAchievement'),
            meta: { title: '专利成果', icon: 'table' }
          },
          {
            path: 'copyRight',
            name: 'CopyRight',
            component: () => import('@/views/workMange/intellectualPropertyRight/copyRight'),
            meta: { title: '著作权', icon: 'table' }
          },
          {
            path: 'standard',
            name: 'Standard',
            component: () => import('@/views/workMange/intellectualPropertyRight/standard'),
            meta: { title: '标准', icon: 'table' }
          }
        ]
      },

      {
        path: '/academicActivities',
        component: () => import('@/views/workMange/academicActivities/index'),
        name: 'AcademicActivities',
        meta: { title: '学术活动', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'hostConference',
            name: 'HostConference',
            component: () => import('@/views/workMange/academicActivities/hostConference'),
            meta: { title: '主办会议SM', icon: 'table' }
          },
          {
            path: 'academicLectures',
            name: 'AcademicLectures',
            component: () => import('@/views/workMange/academicActivities/academicLectures'),
            meta: { title: '学术讲座SM', icon: 'table' }
          },
          {
            path: 'attendMeeting',
            name: 'AttendMeeting',
            component: () => import('@/views/workMange/academicActivities/attendMeeting'),
            meta: { title: '参加会议RSM', icon: 'table' }
          }
        ]
      },

      {
        path: '/systemMainten',
        component: () => import('@/views/workMange/systemMainten/index'),
        name: 'SystemMainten',
        meta: { title: '系统维护', icon: 'el-icon-s-help' },
        children: [
          {
            path: 'userManage',
            name: 'UserManage',
            component: () => import('@/views/workMange/systemMainten/userManage'),
            meta: { title: '用户管理', icon: 'table' }
          },
          {
            path: 'passwordMainten',
            name: 'PasswordMainten',
            component: () => import('@/views/workMange/systemMainten/passwordMainten'),
            meta: { title: '密码维护', icon: 'table' }
          },
          {
            path: 'codeMainten',
            name: 'CodeMainten',
            component: () => import('@/views/workMange/systemMainten/codeMainten'),
            meta: { title: '代码表维护', icon: 'table' }
          },
          {
            path: 'logInformation',
            name: 'LogInformation',
            component: () => import('@/views/workMange/systemMainten/logInformation'),
            meta: { title: '日志信息', icon: 'table' }
          }
        ]
      }
    ]
  },

  /* 社科统计*/

  {
    path: '/researchStatistics',
    component: Layout,
    redirect: '/researchStatistics/education',
    name: 'ResearchStatistics',
    meta: { title: '科研统计', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'education',
        name: 'Education',
        component: () => import('@/views/researchStatistics/education'),
        meta: { title: '教育部科技统计', icon: 'table' }
      },
      {
        path: 'socialSciences',
        name: 'SocialSciences',
        component: () => import('@/views/researchStatistics/socialSciences'),
        meta: { title: '社科统计', icon: 'tree' }
      }
    ]
  },
  /* 评估决策*/

  {
    path: '/evaluateDecision',
    component: Layout,
    redirect: '/evaluateDecision/education',
    name: 'EvaluateDecision',
    meta: { title: '评估决策', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'education',
        name: 'Education',
        component: () => import('@/views/evaluateDecision/scienceResReport/index'),
        meta: { title: '科研报表', icon: 'table' },
        children: [
          {
            path: 'customReport',
            name: 'CustomReport',
            component: () => import('@/views/evaluateDecision/scienceResReport/customReport'),
            meta: { title: '自定义报表', icon: 'table' }
          },
          {
            path: 'fixedReport',
            name: 'FixedReport',
            component: () => import('@/views/evaluateDecision/scienceResReport/fixedReport'),
            meta: { title: '固定报表', icon: 'table' }
          }
        ]
      },
      {
        path: 'comprehensiveInquiry',
        name: 'ComprehensiveInquiry',
        component: () => import('@/views/evaluateDecision/comprehensiveInquiry'),
        meta: { title: '综合查询', icon: 'tree' }
      }
    ]
  },
  /////////////////////////////////////////////////////////////
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '高校科研创新服务平台', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/waiter',
    component: Layout,
    meta:{
      roles:['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/waiters/index'),
        name: 'waiter',
        meta: { title: '员工管理', icon: 'icon', noCache: true,roles:['admin'] }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
