import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="buttons">
      <Button icon="refresh" color="secondary">
        Text
      </Button>
      <GlobalStyle />
    </div>
  )
}

export default App
