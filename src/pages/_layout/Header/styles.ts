import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: ${({ theme }) => shade(0.173, theme.color.primary)};
`;
