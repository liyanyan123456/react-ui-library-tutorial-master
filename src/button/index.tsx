/*
 * @Author: liyanyan123456 2073820553@qq.com
 * @Date: 2025-08-25 16:59:16
 * @LastEditors: liyanyan123456 2073820553@qq.com
 * @LastEditTime: 2025-08-25 17:55:30
 * @FilePath: \react-ui-library-tutorial-master\src\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

export interface ButtonProps {
  /**
   * @description       Alert 的类型
   * @default           'button'
   */
  text?: string;
}

const defaultProps = {
  text: 'button',
};

const prefixCls = 'button';

const Button: React.FC<ButtonProps> = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  return <div className={prefixCls}>{props.text}</div>;
};

export default Button;
