// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  HeadingContainer,
  AppTitle,
  Line,
  CardImageContainer,
  CardNumber,
  CardHolderName,
  CardHolder,
  InputsContainer,
  DetailsContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState()

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <HeadingContainer>
          <AppTitle>CREDIT CARD</AppTitle>
          <Line />
        </HeadingContainer>
        <CardImageContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardHolder>{name.toUpperCase()}</CardHolder>
        </CardImageContainer>
      </CardContainer>
      <InputsContainer>
        <DetailsContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            placeholder="Card Number"
            type="text"
            onChange={onChangeNumber}
            value={number}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            onChange={onChangeName}
            value={name}
          />
        </DetailsContainer>
      </InputsContainer>
    </AppContainer>
  )
}

export default CreditCard
