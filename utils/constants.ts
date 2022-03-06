//-------- AsyncStorage Key ---------//
export const KEY_TOKEN = 'token';
export const KEY_CURRENT_USER = 'current_user';

//-------- API ---------//
export enum API_PROBLEM_CODE {
  CLIENT_ERROR = 'CLIENT_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  CONNECTION_ERROR = 'CONNECTION_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  CANCEL_ERROR = 'CANCEL_ERROR',
}
