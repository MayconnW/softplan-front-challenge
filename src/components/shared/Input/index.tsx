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
  register?(ref: HTMLInputElement): void;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  onBlur,
  onFocus,
  className,
  label,
  error,
  type = 'text',
  register,
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

  useEffect(() => {
    if (typeof register === 'function' && inputRef?.current) {
      register(inputRef.current);
    }
  }, [register]);

  return useMemo(
    () => (
      <Container className={className}>
        {!!label && <Label data-testid="_labelTest">{label}</Label>}
        <InputContainer
          hasError={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          className="_inputContainer"
          data-testid="_inputContainer"
        >
          {Icon && (
            <IconContainer className="_iconContainer">
              <Icon size={20} data-testid="_iconTest" />
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
              <FiAlertCircle size={20} data-testid="_errorTest" />
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
