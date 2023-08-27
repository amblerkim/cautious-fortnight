import React from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space, Layout } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Update ${key}`);
};

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};


const items : MenuProps['items'] = [
  {
    label: <a>김한섭 회원님, 잔여 2회</a>,
    key: '0',
  },
  {
    label: <a>백승하 회원님, 잔여 4회</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <a>거북이 회원님, 종료</a>,
    key: '3',
    disabled : true
  },
];


export default function MemberNoticeImpending(): JSX.Element {

    return (
      <Space>
        <Dropdown menu={{ items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              PT가 곧 종료되는 회원
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>
    );
}