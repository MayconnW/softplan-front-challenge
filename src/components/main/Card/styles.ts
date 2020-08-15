import styled from 'styled-components';
import { shade, lighten } from 'polished';

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

  > img {
    width: 116px;
  }

  > span {
    font-size: 24px;
    color: ${({ theme }) => theme.color.secondary};

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
