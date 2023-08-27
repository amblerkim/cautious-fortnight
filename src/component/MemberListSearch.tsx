import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';


const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);


export default function MemberListSearch(): JSX.Element{
    return(
        <Search placeholder="회원 이름을 입력해 주세요." onSearch={onSearch} enterButton style={{width: 300}} /> 
    );
}