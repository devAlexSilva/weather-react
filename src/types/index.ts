export type propsHeader = {
  textLogo?: string;
};

export type propsSection = {
  img?: string;
  alt?: string;
};

export type responseApi = {
  name: string;
  main: { temp: number };
  sys: { country: string };
  weather: [{ description: string; icon: string }];
  cod: string;
  message: string;
};
