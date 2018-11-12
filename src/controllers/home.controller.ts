// import * as faker from 'faker';
import { fakerMethods as methods } from '../data/faker-methods';

interface IMethodGroupsResponse {
  [key: string]: string[]
}

export const index = (_req, res) => {
  // const groups: string[] = Object.keys(methods);
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