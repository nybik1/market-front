export type NavigationDict = keyof Dictionary["navigation"];
export type Dictionary = {
  hello: string;
  navigation: {
    home: string;
    catalog: string;
    about: string;
    contact: string;
  };
};

export const defaultDictionary: Dictionary = {
  hello: "",
  navigation: {
    home: "",
    catalog: "",
    about: "",
    contact: "",
  },
};
