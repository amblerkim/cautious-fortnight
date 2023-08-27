import { UserDeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react';

export default function MemberModification(): JSX.Element {

    return (
      <>
        <FloatButton.Group
          trigger="click"
          type="primary"
          style={{ right: 34 }}
          icon={<UserAddOutlined />}
        >
          <FloatButton />
          <FloatButton icon={<UserDeleteOutlined />} />
          <FloatButton icon={<UserAddOutlined />} />
        </FloatButton.Group>
      </>
    );
}

