import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Tooltip from 'components/shared/Tooltip';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: ${({ theme }) => shade(0.27, theme.color.primary)};
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => shade(0.58, theme.color.secondary)};

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.color.tertiary};
      color: ${theme.color.tertiary};
    `};

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border-color: ${theme.color.tertiary};
      color: ${theme.color.tertiary};
    `};

  input {
    width: 100%;
    min-width: 0;
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.color.secondary};

    &::placeholder {
      color: ${({ theme }) => shade(0.58, theme.color.secondary)};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    color: red;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  align-self: flex-start;
  color: ${({ theme }) => theme.color.secondary};
  margin-left: 8px;
  margin-bottom: 3px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  svg {
    margin: 0;
  }
`;
