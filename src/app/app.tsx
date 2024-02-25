import Main from '../pages/main';

interface AppProps {
  rentNumber: number;
}

function App({ rentNumber }: AppProps) {
  return <Main rentNumber={rentNumber} />;
}

export default App;