export interface Theme {
  name: string;
  background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
  };
  button: {
      primary: string;
      secondary: string;
  };
  font: {
      primary: string;
      secondary: string;
  };
}