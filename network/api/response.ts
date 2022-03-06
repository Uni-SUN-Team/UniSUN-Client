export type PROBLEM_CODE =
  | 'CLIENT_ERROR'
  | 'SERVER_ERROR'
  | 'TIMEOUT_ERROR'
  | 'CONNECTION_ERROR'
  | 'NETWORK_ERROR'
  | 'UNKNOWN_ERROR'
  | 'CANCEL_ERROR';

export interface IResponse<T> {
  errorMessage?: string;
  status?: string;
  httpStatusCode?: number;
  problem?: PROBLEM_CODE;
  data?: T;
}
