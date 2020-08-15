import 'styled-components';

import Color from './styled/modules/Color';
import Tooltip from './styled/modules/Tooltip';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    tooltip: Tooltip;
  }
}
