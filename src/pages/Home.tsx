/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useDarkMode } from '../hooks/useDarkMode';
import Input from '../components/Input';
import Switch from '../components/Switch';

const Home = () => {
  const { isDarkMode, toggleColorMode } = useDarkMode();
  return (
    <Card>
      {isDarkMode ? (
        <h4>Dark Mode is Enabled</h4>
      ) : (
        <h4>Dark Mode is Disabled</h4>
      )}
      <Input />
      <Switch
        checked={isDarkMode}
        onChange={toggleColorMode}
        label="Toggle Dark Mode"
      />
      <Link to="/other-page">Go to other page</Link>
      <Link to="/private-page">Go to private page</Link>
    </Card>
  );
};
export default Home;
