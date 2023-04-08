import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    bgAlphaColor: string;
    textColor: string;
    accentColor: string;
  }
}
