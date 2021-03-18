import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
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