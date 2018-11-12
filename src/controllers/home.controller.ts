import * as faker from 'faker';
import { fakerMethods as methods } from '../data/faker-methods';
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
  
  [...Array(12	).keys()].forEach(_ => {
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