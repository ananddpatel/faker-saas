import * as faker from 'faker';
import { fakerMethods as methods } from '../data/faker-methods';
import * as XLSX from 'xlsx';
// import * as fs from 'fs';

interface IMethodGroupsResponse {
  [key: string]: string[]
}

interface IMethodRequestData {
  group: string;
  name: string;
  selected: boolean
}

export const index = (_req, res) => {
  res.render("pages/index");
};

export const getMethodData = (_req, res) => {
  const grouped: IMethodGroupsResponse = {}
  for (const group in methods) {
    if (methods.hasOwnProperty(group)) {
      grouped[group] = Object.keys(methods[group])
    }
  }
  res.send(grouped)
};
export const getSampleData = (req, res) => {
  
  const methodNamesToGet: IMethodRequestData[] = [...req.body];
  const data: any[] = [];
  
  [...Array(10).keys()].forEach(_ => {
    const rowData = {};
    methodNamesToGet.forEach(m => {
      const method = methods[m.group][m.name];
      if (method) {
          rowData[m.name] = faker[m.group][method]();
        }
      })
    data.push(rowData);
  })
  
  res.send(data)
};

export const downloadExcel = (_req, res) => {
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([['asd', 'asd'], ['hello', 'world']]);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  // const file = XLSX.write(wb);
  var fileName = "Categories.xlsx";
  res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
  res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer'});
  res.send(new Buffer(wbout));
  // fs.writeFileSync("../storage/test-write.xlsx", file, { encoding: 'binary' });
  // res.download('../storage/test-write.xlsx')
}