import styled from "styled-components"

export const CardInput = ({
  value = "",
  setForm = () => {},
  name,
  type,
  error,
  title,
  width = "auto",
}) => {
  return (
    <CardInputComponent width={width} $error={error}>
      <CardInputTitle>{title}</CardInputTitle>
      <Input
        type={type}
        value={value}
        onChange={(e) =>
          setForm((value) => {
            return {
              ...value,
              [name]: { value: e.target.value },
            }
          })
        }
      />
    </CardInputComponent>
  )
}

const CardInputComponent = styled.div`
  background-color: white;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: start;

  width: ${(props) => props.width};
  padding: 0.2em 0.5em;
  margin-block: 0.5em;

  border-radius: 0.3em;
  border: 1px solid ${(props) => (props.$error ? "#ff2222" : "white")};
`

const CardInputTitle = styled.label``

const Input = styled.input`
  background-color: #0000;

  width: 100%;

  border: none;
  outline: none;
`

export const CardContainer = styled.form`
  background-color: ${(props) => props.theme.mediumGray};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 10%;
  padding-block: 2em;

  border-radius: 1em;

  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    padding-block: 1em;
  }
`

export const CardTitle = styled.h2`
  font-size: 1.5em;
`

export const CreateAccountInputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CardButton = styled.button`
  background-color: ${(props) => props.theme.orange};
  color: white;

  width: 10em;

  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;

  border: none;
  border-radius: 1em;

  margin-inline: 3em;
  margin-block: 1.5em;
  padding-block: 1em;

  cursor: pointer;
  transition: background-color 250ms;

  :hover {
    background-color: ${(props) => props.theme.green};
  }

  @media screen and (max-width: ${(props) => props.theme.maxWidthMobile}) {
    width: 50%;
  }
`

export const BackButton = styled.button`
  background-color: #0000;

  border: none;

  text-decoration: underline;

  cursor: pointer;
`
