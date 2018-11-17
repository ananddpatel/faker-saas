export interface IMethodRequestData {
  group: string;
  name: string;
  selected: boolean
}

export interface IMethodGroupsResponse {
  [key: string]: string[]
}
