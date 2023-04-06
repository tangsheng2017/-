import request from './request'

// 根据字典类型查询字典列表数据
export function getDictType(data) {
  return request({
    url: 'jx_admin_api/rescue/global/dict/by/type',
    method: 'post',
    data
  })
}

// 获取队伍名字列表
export function getTeam(data) {
  return request({
    url: 'jx_admin_api/rescue/global/list/team',
    method: 'post',
    data
  })
}
