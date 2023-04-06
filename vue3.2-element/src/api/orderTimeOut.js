import request from './request'

const baseUrl = 'jx_admin_api/rescue/work/overtime'

// 查询列表数据（分页）
export function getTableList(data) {
  return request({
    url: `${baseUrl}/page`,
    method: 'post',
    data
  })
}
