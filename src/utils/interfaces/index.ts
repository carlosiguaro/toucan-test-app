export interface Field {
    value: string;
    touched: boolean;
}
  
export interface Fields {
    [key: string]: Field;
}

export interface FormData {
  email: string;
  password: string;
  rpassword: string;
};
  
export interface FocusedData {
  email: boolean;
  password: boolean;
  rpassword: boolean;
};

export interface MessageConfig {
  type: string;
  message: string;
  show: boolean;
};

export interface childrenProp {
  children: React.ReactNode;
  authenticated: boolean
}

export interface UserInterface {
  email: string;
  name: string;
  image: string;
}