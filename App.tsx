import * as React from 'react';
import './style.css';

const Heading = ({ title }: { title: string }) => <h1>{title}</h1>;

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

type itemProps = {
  items: string[]
}

const List = ({ items }: {items: string[]}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default function App() {
  return (
    <div style={{ padding: '1rem', fontWeight: 'bold' }}>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'Three']} />
    </div>
  );
}
