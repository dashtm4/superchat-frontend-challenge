import React, { RefObject } from 'react'
import clsx from 'clsx';

import BaseInput from '../BaseInput';

import './FormInput.scss';

interface IProps {
  children?: any;
  className?: string;
  defaultValue?: string;
  label: string;
  placeholder?: string;
  value?: string;

  onChange?: (
    value: string,
  ) => void;
  onChildrenClick?: (
    ref: RefObject<HTMLInputElement>
  ) => void;
}

function FormInput({
  children,
  className: wrapperStyle,
  defaultValue,
  label,
  placeholder,
  value,
  onChange,
  onChildrenClick,
}: IProps) {
  return (
    <div className={clsx(
      wrapperStyle,
      "form-input--wrapper",
    )}>
      <div className="label">
        {label}
      </div>
      <BaseInput
        className="form-input--element"
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onChildrenClick={onChildrenClick}
      >
        {children}
      </BaseInput>
    </div>
  )
};

export default FormInput;
