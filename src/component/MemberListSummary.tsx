import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Space } from "antd"; 

const { Title } = Typography;
  

export default function MemberListSummary(): JSX.Element {
    return (
      <>
        <div className="MemberList">
          <Space wrap>
          <Title level={5}>지금까지</Title>
          </Space>
          <br />  
          <Space wrap>        
          <Button type="primary" size="small">25명의</Button>
          <Title level={4}>회원들이 있습니다 </Title>
          </Space>
        </div>
      </>
    );
}