import { Button } from './components/Button/Button'
import { Container } from './components/Button/Container-styles'
import { ContainerButtons } from './components/Button/ContainerButtons-styles'
import { Text } from './components/Text/Text'
import { GlobalStyle } from './styles/global'

function App() {
  function handleClickExample(e) {
    console.log('clicou')
  }

  return (
    <div className="buttons">
      <Container>
        <Text>Design System LemonEnergy - Component / Button</Text>
        <Text>primary</Text>
        <Button onClick={handleClickExample} color="primary" width="31rem">
          Text
        </Button>

        <Text>secondary</Text>
        <Button onClick={handleClickExample} color="secondary" width="31rem">
          Text
        </Button>

        <Text>icon</Text>
        <p>Demonstração das três variações com ícones</p>
        <ContainerButtons>
          <Button
            onClick={handleClickExample}
            color="primary"
            icon="arrow-right"
            width="31rem"
          >
            Text
          </Button>

          <Button
            onClick={handleClickExample}
            color="primary"
            icon="check"
            width="31rem"
          >
            Text
          </Button>

          <Button
            onClick={handleClickExample}
            color="primary"
            icon="refresh"
            width="31rem"
          >
            Text
          </Button>
        </ContainerButtons>

        <ContainerButtons>
          <Button
            onClick={handleClickExample}
            color="secondary"
            icon="arrow-right"
            width="31rem"
          >
            Text
          </Button>

          <Button
            onClick={handleClickExample}
            color="secondary"
            icon="check"
            width="31rem"
          >
            Text
          </Button>

          <Button
            onClick={handleClickExample}
            color="secondary"
            icon="refresh"
            width="31rem"
          >
            Text
          </Button>
        </ContainerButtons>

        <Text>disabled</Text>
        <ContainerButtons>
          <Button
            onClick={handleClickExample}
            color="primary"
            disabled
            width="31rem"
          >
            Text
          </Button>

          <Button
            onClick={handleClickExample}
            color="secondary"
            disabled
            width="31rem"
          >
            Text
          </Button>
        </ContainerButtons>

        <Text>full-width</Text>
        <p>
          Width padrão preenche o container; pode-se especificar o tamanho
          desejado utilizando a prop "width"
        </p>
        <ContainerButtons>
          <Button onClick={handleClickExample} color="primary">
            Text
          </Button>
        </ContainerButtons>
      </Container>
      <GlobalStyle />
    </div>
  )
}

export default App
