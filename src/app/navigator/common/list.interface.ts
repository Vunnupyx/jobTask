export interface ListDto {
  readonly _id: string;
  readonly amount: string;
  readonly type: string;
  readonly name: {
    first: string,
    last: string
  };
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
}

export interface ListEntity {
  _id: string;
  amount: string;
  type: string;
  name: {
    first: string,
    last: string
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
