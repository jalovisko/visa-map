export default function tableDataCalculation(tableData:any, setTableData: Function, a:number) {
  setTableData(tableData, tableData[a][0] = "test")
}