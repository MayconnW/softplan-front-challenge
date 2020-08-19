import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 240px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => lighten(0.055, theme.color.primary)};
  cursor: pointer;

  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: 1px 1px 10px 2px
      ${({ theme }) => lighten(0.1, theme.color.primary)};
  }

  > img {
    width: 116px;
  }

  > span {
    font-size: 24px;
    color: ${({ theme }) => theme.color.secondary};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.color.tertiary};
      font-weight: bold;
    }

    & + span {
      align-self: flex-start;
      font-size: 22px;
    }
  }
`;
