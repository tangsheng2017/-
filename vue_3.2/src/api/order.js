import request from './request'

const baseUrl = 'jx_admin_api/rescue/work'

// 查询列表数据（分页）
export function getTableList(data) {
  return request({
    url: `${baseUrl}/rescue/page`,
    method: 'post',
    data
  })
}

// 测试单
export function toIsTest(data) {
  return request({
    url: `${baseUrl}/to/is/test`,
    method: 'post',
    data
  })
}
