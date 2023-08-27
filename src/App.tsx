import React, { useState } from 'react';
import { Divider, Layout } from 'antd';
import type { SpaceSize } from 'antd/es/space';
import { BrowserRouter  } from 'react-router-dom';
import Header from './component/Header';
import MemberTrainer from './component/MemberTrainer';
import MemberNoticeImpending from './component/MemberNoticeImpending';
import MemberNoticeUpdate from './component/MemberNoticeUpdate';
import MemberListSummary from './component/MemberListSummary';
import MemberListSearch from './component/MemberListSearch';
import MemberLilstAll from './component/MemberListAll';
import MemberModification from './component/MemberModification';


const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};


const App: React.FC = () => {
  const [size, setSize] = useState<SpaceSize | [SpaceSize, SpaceSize]>('small');

  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Divider plain>트레이너</Divider>

      <MemberTrainer />
      <Divider plain>알림</Divider>

      <MemberNoticeImpending />
      <br />
      <br />
      <MemberNoticeUpdate />
      <br />
      <br />
      <br />
      <Divider plain>회원 리스트</Divider>
      <MemberListSummary />
      <MemberListSearch />
      <br />
      <br />
      <MemberLilstAll />
      <MemberModification />

      </div>
    </BrowserRouter>
    
  );
};

export default App;