// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getConfig from 'next/config'
import Calculator from "../../src/utils/calculator";
const {serverRuntimeConfig}  = getConfig()



export default async function handler(req, res) {
  const calculator = new Calculator()
  await calculator.loadFile(`${serverRuntimeConfig.PROJECT_ROOT}/Buckling_Rigid_Boundary.xlsx`)
  calculator.getData(0.5,0.5)
  // const rows = await readXlsxFile(`${serverRuntimeConfig.PROJECT_ROOT}/Buckling_Rigid_Boundary.xlsx`)
  //   let x = []
  //   rows.map((row,index) => {
  //     if(index === 0 ){
  //       row.map((item,innerIndex) => {
  //
  //         xDirection.push([item,innerIndex])
  //       })
  //
  //       }else {
  //         yDirection.push([row[0],index])
  //     }
  //     }
  //   )
  //
  // console.log("outside",xDirection)
  // console.log("outside",yDirection)
  // const sheet = file.Sheets["Sheet1"]
  // console.log(sheet)
  //   const data = XLSX.utils.sheet_to_json(sheet)
  // console.log(data)
  res.status(200).json({ name: 'John Doe' })

}
