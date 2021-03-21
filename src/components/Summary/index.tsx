import { useContext} from 'react';
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {
  const data = useContext(TransactionsContext);
  // nova forma de utilizar contexto

  return (
    <Container>
      {/*<TransactionsContext.Consumer>
        { (data) => {
          console.log(data)

          return <p>ok</p>
        }}
      </TransactionsContext.Consumer> */}
      {/* forma antiga de utilizar contexto */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="Saídas"/>
        </header>
        <strong>- R$700,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$300,00</strong>
      </div>
    </Container>
  )
}