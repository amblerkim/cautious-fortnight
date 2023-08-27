import React from "react";
import { Link } from "react-router-dom";
import { AntDesignOutlined } from  "@ant-design/icons";
import { Avatar, Typography, Layout, Space } from "antd"; 

type TrainerProps = {
  name: string;
}

const Trainers: React.FC<TrainerProps> = ({name}) => (
  <div>Hello, {name}</div>
);


const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};



export default function MemberTrainer(): JSX.Element {


    return (
      <div className="trainer">
        <Layout hasSider>
          <Sider style={siderStyle}>
            <Avatar
              size={{ xs: 150, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
          </Sider>
          <Content style={contentStyle}>
          <Title level={4}>박소영 트레이너님</Title>
          <Title level={3}>새로운 알림 2건이 있어요!</Title>
          </Content>
        </Layout>
      </div>
    );
}