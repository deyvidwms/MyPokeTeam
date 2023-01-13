import { Theme } from "./Theme";

export interface IToggleDarkMode {
  theme: Theme;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};
