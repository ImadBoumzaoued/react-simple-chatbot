import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const ExComp = props => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.emulateSubmitUserMessage('Chose this');
          props.triggerNextStep({ value: 'chose this', trigger: '2' });
        }}
      >
        click
      </button>
    </div>
  );
};

const steps = [
  {
    id: '1',
    component: <ExComp />
  },
  {
    id: '2',
    message: 'Thanks',
    end: true
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} userDelay={100} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
