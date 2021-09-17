import React, {
  ChangeEvent,
  createRef,
  RefObject,
} from 'react'

import './BaseInput.scss';

interface IProps {
  children?: any;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;

  onChange?: (
    value: string,
  ) => void;
  onChildrenClick?: (
    ref: RefObject<HTMLInputElement>
  ) => void;
}

function BaseInput({
  children,
  className: wrapperStyle,
  defaultValue,
  placeholder,
  value,
  onChange,
  onChildrenClick,
}: IProps) {
  const inputRef = createRef<HTMLInputElement>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedValue: string = event.target.value;

    onChange && onChange(updatedValue);
  };

  const handleChildrenClick = () => {
    onChildrenClick && onChildrenClick(inputRef);
  };

  return (
    <div className={wrapperStyle}>
      <input
        className="base-input--wrapper"
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div onClick={handleChildrenClick}>
        {children}
      </div>
    </div>
  )
};

export default BaseInput;
