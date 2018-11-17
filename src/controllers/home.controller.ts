import { fakerMethods as methodsMap } from '../data/faker-methods';
import * as XLSX from 'xlsx';
import { IMethodGroupsResponse, IMethodRequestData } from '../common/models';
import { generateFakerData } from '../common/utils';
// import * as fs from 'fs';

/**
 * renders index home page
 * @param _req request
 * @param res response
 */
export const index = (_req, res) => {
  res.render("pages/index");
};

/**
 * gets all the readable names of methods per group
 * @param _req request
 * @param res response
 */
export const getMethodData = (_req, res) => {
  const grouped: IMethodGroupsResponse = {}
  for (const group in methodsMap) {
    if (methodsMap.hasOwnProperty(group)) {
      grouped[group] = Object.keys(methodsMap[group])
    }
  }
  res.send(grouped)
};

/**
 * generate 10 records of sample data. setting the seed makes sure everyone gets the same data
 * @param _req request
 * @param res response
 */
export const getSampleData = (req, res) => {
  const methodNamesToGet: IMethodRequestData[] = [...req.body];
  const data: any[] = generateFakerData(methodNamesToGet, methodsMap, 10, false);
  res.send(data)
};

/**
 * generates the excel file that contains data from the requested methods and number of rows as a base64 string and sends it
 * @param _req request
 * @param res response
 */
export const downloadExcel = (req, res) => {
  const methodNamesToGet: IMethodRequestData[] = [...req.body.methods];
  const data: any[] = generateFakerData(methodNamesToGet, methodsMap, req.body.rows, true);
  const dataHeaders: string[][] = [Object.keys(data[0])];
  const rowData: string[][] = data.map(item => Object.values(item));

  const finalRowData: string[][] = [...dataHeaders, ...rowData];

  // return res.send(finalRowData);
  
  const ws = XLSX.utils.aoa_to_sheet(finalRowData);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "data");

	const buffer = XLSX.write(wb, {type: "base64", bookType: req.body.fileType});
	res.status(200).send({buffer, fileName: `FakeDataGen_${new Date().getTime()}.${req.body.fileType}`});
}