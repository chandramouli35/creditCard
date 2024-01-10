// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    padding-bottom: 100px;
    justify-content: space-around;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-size: cover;
`

export const AppTitle = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 20px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }
`

export const Line = styled.hr`
  width: 80%;
  height: 2px;
  background-color: #ffd773;
  text-align: left;
  margin-left: 0;
`
export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 14px;
  width: 80%;
  padding: 30px 15px;
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #fff;
  margin: 40px 30px 20px 30px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const CardHolderName = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 13px;
  margin: 20px 30px 10px;
`
export const CardHolder = styled(CardHolderName)`
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-left: 30px;
  margin-top: 5px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px #d3d9e0;
  border-radius: 15px;
  padding: 20px;
  width: 80%;
`
export const PaymentMethodHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #344e7a;
`

export const Input = styled.input`
  width: 90%;
  height: 40px;
  border: solid 1px #c3cad9;
  padding: 10px;
  color: #475569;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
`
