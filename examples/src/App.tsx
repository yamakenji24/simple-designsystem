import { Button } from '@ui/components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant='primary' size='m'>
          button from components
        </Button>
        <p className="bg-yellow-500">test text</p>
      </header>
    </div>
  );
}

export default App;
