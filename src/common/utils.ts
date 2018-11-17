import { IMethodRequestData } from './models';
import * as faker from 'faker';

export function generateFakerData(methodNamesToGet: IMethodRequestData[], methodsMap: any, count: number, seed: boolean) {
  if (seed) {
    faker.seed(new Date().getTime());
  } else {
    faker.seed(123);
  }
  const data: any[] = [];
  [...Array(count).keys()].forEach(_ => {
    const rowData = {};
    methodNamesToGet.forEach(m => {
      const method = methodsMap[m.group][m.name];
      if (method) {
        rowData[m.name] = faker[m.group][method]();
      }
    });
    data.push(rowData);
  });
  return data;
}
