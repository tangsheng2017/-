import request from './request'
const baseUrl = 'jx_admin_api/rescue/global/admin'

// 用户所拥有的菜单数据权限列表
export function getMenuListApi(data) {
  return request({
    url: `${baseUrl}/get/menu/list/`,
    method: 'post',
    data
  })
}
