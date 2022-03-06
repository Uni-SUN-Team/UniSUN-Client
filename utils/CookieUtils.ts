import {KEY_CURRENT_USER, KEY_TOKEN} from './constants';
import Cookies from 'js-cookie';

export default class AsyncStorageUtils {
  static stringifyAndStore(key: string, value: any): void {
    const stringifiedValue = JSON.stringify(value);

    Cookies.set(key, stringifiedValue);
  }

  static getStoredStringifyValue<T>(key: string): T | undefined {
    const stringifiedValue = Cookies.get(key);

    if (stringifiedValue) {
      const object = JSON.parse(stringifiedValue) as T;

      return object;
    }
  }

  static setCurrentUser = (value: string): boolean => {
    try {
      Cookies.set(KEY_CURRENT_USER, value);
      return true;
    } catch (e) {
      return false;
    }
  };

  static getCurrentUser = (): string | undefined => {
    try {
      const value = Cookies.get(KEY_CURRENT_USER);
      if (value) {
        return value;
      }
      return undefined;
    } catch (e) {
      return undefined;
    }
  };

  static resetCurrentUser = (): boolean => {
    try {
      Cookies.remove(KEY_CURRENT_USER);
      return true;
    } catch (e) {
      return false;
    }
  };

  static setToken = (value: string): boolean => {
    try {
      Cookies.set(KEY_TOKEN, value);
      return true;
    } catch (e) {
      return false;
    }
  };

  static getToken = (): string | undefined => {
    try {
      const value = Cookies.get(KEY_TOKEN);
      if (value) {
        return value;
      }
      return undefined;
    } catch (e) {
      return undefined;
    }
  };

  static resetToken = (): boolean => {
    try {
      Cookies.remove(KEY_TOKEN);
      return true;
    } catch (e) {
      return false;
    }
  };
}
