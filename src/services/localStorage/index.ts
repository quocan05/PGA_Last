export const setLocalStorage = (token: string) => {
  return localStorage.setItem("token", token);
};

export const getLocalStorage = (value: string) => {
  return localStorage.getItem(value);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};

export const deleteLocalStorageItem = (key: string) => {
  key !== "" && localStorage.removeItem(key);
};
