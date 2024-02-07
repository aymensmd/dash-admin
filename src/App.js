import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Form from '../src/components/Form'
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['Home', 'about', 'Services'].map((name) => ({
  name,
  label: ` ${name}`,
}));
const items2 = [
  { icon: UserOutlined, mainLabel: 'User Profile', labels: ['Profile Info', 'Settings', 'Security'], },
  { icon: LaptopOutlined, mainLabel: 'Devices', labels: ['Laptop', 'Desktop', 'Tablet'], },
  { icon: NotificationOutlined, mainLabel: 'Notifications', labels: ['Alerts', 'Messages', 'Updates'], },
].map(({ icon, mainLabel, labels }, index) => {
  const key = `sub${index + 1}`;
  return {
    key,
    icon: React.createElement(icon),
    label: mainLabel,
    children: labels.map((label, j) => ({
      key: index * labels.length + j + 1,
      label: label,
    })),
  };
});

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >

          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;