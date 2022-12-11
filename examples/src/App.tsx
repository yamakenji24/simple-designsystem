import { Button } from '@ui/components'
import { buttonColors } from '@foundation/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant='primary' size='m'>
          button from components
        </Button>
        <p className="bg-yellow-500">test text</p>
        <button className={buttonColors.primary.base}>
          color from theme
        </button>
      </header>
    </div>
  );
}

export default App;
