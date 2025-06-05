import React from 'react';
import { Welcome, Alert } from '@liyanyan/chat-ui';

const Demo = () => {
  return (
    <>
      <Welcome
        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
        title="Hello, I'm Ant Design X"
        description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
      />
      {/* <Alert kind="warning">这是一条警告提示</Alert> */}
    </>
  );
};

export default Demo;
