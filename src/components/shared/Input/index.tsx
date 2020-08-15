import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import {
  Container,
  InputContainer,
  Error,
  Label,
  IconContainer,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password';
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  onBlur,
  onFocus,
  className,
  label,
  error,
  type = 'text',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputFocus = useCallback(
    ({ ...props }) => {
      setIsFocused(true);
      if (typeof onFocus === 'function') {
        onFocus({ ...props });
      }
    },
    [onFocus],
  );

  const onInputBlur = useCallback(
    ({ ...props }) => {
      setIsFocused(false);
      setIsFilled(!!inputRef.current?.value);
      if (typeof onBlur === 'function') {
        onBlur({ ...props });
      }
    },
    [onBlur],
  );

  useEffect(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return useMemo(
    () => (
      <Container className={className}>
        {!!label && <Label>{label}</Label>}
        <InputContainer
          hasError={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          className="_inputContainer"
        >
          {Icon && (
            <IconContainer className="_iconContainer">
              <Icon size={20} />
            </IconContainer>
          )}
          <input
            autoComplete="off"
            type={type}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            ref={inputRef}
            {...rest}
          />
          {!!error && (
            <Error title={error} type="error">
              <FiAlertCircle size={20} />
            </Error>
          )}
        </InputContainer>
      </Container>
    ),
    [
      isFilled,
      isFocused,
      className,
      Icon,
      onInputBlur,
      onInputFocus,
      error,
      label,
      type,
      rest,
    ],
  );
};

export default Input;
