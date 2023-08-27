import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd"; 

const { Title } = Typography;

export default function Header(): JSX.Element {
    return (
      <div className="header">
        <center>
          <Title level={3}>
            <Link to="/">회원관리</Link>
          </Title>
        </center>
      </div>
    );
}