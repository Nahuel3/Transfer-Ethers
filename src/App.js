import Layout from './components/Layout'
import Brigde from './components/Brigde'

function App() {
  return (
    <div className="App">
      <Layout
        layout={<Brigde/>}
      />
    </div>
  );
}

export default App;
