import { Moment } from 'moment';

export interface IProduct {
  id?: number;
  description?: string;
  hsCode?: string;
  skuCode?: string;
  countryOfOrg?: string;
  unitPrice?: number;
  quantity?: number;
  itemValue?: number;
  createdDate?: Moment;
  updatedDate?: Moment;
  currencyId?: number;
  createdByUserId?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public description?: string,
    public hsCode?: string,
    public skuCode?: string,
    public countryOfOrg?: string,
    public unitPrice?: number,
    public quantity?: number,
    public itemValue?: number,
    public createdDate?: Moment,
    public updatedDate?: Moment,
    public currencyId?: number,
    public createdByUserId?: number
  ) {}
}
