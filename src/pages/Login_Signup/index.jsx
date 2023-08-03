import { useState } from 'react';
import './index.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../../components/Form/Login';
import Register from '../../components/Form/Register';
import { Helmet } from 'react-helmet';

function LoginSignup() {
  const [key, setKey] = useState('Register');

  return (
    <div className="float-center">

    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='w-25 tabs mt-5'
    >
      <Tab eventKey="Login" title="Login"  className='mt-5' >
        <Helmet title="Login"/>
        <Login/>
      </Tab>
      <Tab eventKey="Register" title="Register"  className='mt-5'>
        <Helmet title="Register"/>
        <Register/>
      </Tab>
    </Tabs>
      </div>
  );
}

export default LoginSignup;