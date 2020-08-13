import 'styled-components';

import Color from './styled/modules/Color';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
