import React from "react";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space, Layout } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`회원님 ${key}`);
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
    label: <a>호랑이 회원님, 시간</a>,
    key: '0',
  },
  {
    label: <a>사자 회원님, 시간</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <a>[완료] 토끼 회원님, 시간</a>,
    key: '3',
    disabled : true
  },
];




export default function MemberNoticeUpdate(): JSX.Element {

    return (
          <Space>
          <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                운동 일지 업데이트가 필요한 회원
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          </Space>

    );
}