import * as faker from 'faker';
import { fakerMethods } from '../data/faker-methods';

export const index = (_req, res) => {
  const address = faker.address.city(1);
  console.log(address);
  
  res.render("pages/index", {methods: fakerMethods});
};