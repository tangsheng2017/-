import request from './request'

const baseUrl = 'jx_admin_api/rescue/resource/pint'

// 查询列表数据（分页）
export function getTableList(data) {
  return request({
    url: `${baseUrl}/page`,
    method: 'post',
    data
  })
}

// 根据id查询一条驻点数据
export function getDetails(data) {
  return request({
    url: `${baseUrl}/by/id`,
    method: 'post',
    data
  })
}

// 修改一条驻点数据
export function editDetails(data) {
  return request({
    url: `${baseUrl}/update`,
    method: 'post',
    data
  })
}

// 新增一条驻点数据
export function addDetails(data) {
  return request({
    url: `${baseUrl}/add`,
    method: 'post',
    data
  })
}

// 删除驻点数据
export function delDetails(data) {
  return request({
    url: `${baseUrl}/delete`,
    method: 'post',
    data
  })
}
