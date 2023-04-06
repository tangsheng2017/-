import { reactive, ref } from 'vue'

// 表格和分页hooks

// filter筛选项
// getTableList列表接口
export default function useTableProps(filter = {}, getTableList) {
  // 分页数据
  const pageObj = reactive({
    currentPage: 1,
    pageSize: 10,
    totalResult: 0
  })

  // 表格数据
  const tableData = ref([])

  const getListFun = async () => {
    filter.page = pageObj.currentPage
    filter.size = pageObj.pageSize
    const res = await getTableList(filter)
    tableData.value = res.data
    pageObj.totalResult = Number(res.pagerOrder.totalCount)
  }
  getListFun()

  // 表格分页方法
  const tablePageFun = (eventObj) => {
    const type = eventObj.type
    const data = eventObj.data
    if (type === 'paginationSizeChange') {
      pageObj.currentPage = data.currentPage
      pageObj.pageSize = data.pageSize
      getListFun()
    }
  }

  return {
    getListFun,
    tableData,
    pageObj,
    tablePageFun
  }
}
