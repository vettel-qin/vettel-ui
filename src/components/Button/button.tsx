import React from 'react';
import classNames from 'classNames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean; // 设置 Button 的禁用
  size?: ButtonSize; // 设置 Button 的尺寸
  btnType?: ButtonType; // 设置 Button 的类型
  href?: string;
  children?: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    children,
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (<button className={classes}>{children}</button>)
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;