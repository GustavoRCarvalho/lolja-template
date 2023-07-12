import styled from "styled-components"

export const Options = ({ options }) => {
  const optionsKeys = Object.keys(options)
  return (
    <OptionsContainer>
      {optionsKeys.map((option) => {
        return (
          <OptionsWrapper>
            <OptionsTitle>{option}</OptionsTitle>
            <div>
              {options[option].map((label) => (
                <OptionButton>{label}</OptionButton>
              ))}
            </div>
          </OptionsWrapper>
        )
      })}
    </OptionsContainer>
  )
}
const OptionsContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;

  max-width: max-content;

  display: flex;
  flex-direction: column;

  padding: 0.9em;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 1em;
  }
`

const OptionsTitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;

  margin-block: 0.5em;
`

const OptionButton = styled.button`
  background-color: #e0e0e0;
  border-radius: 0.2rem;
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.23em;
  text-align: center;
  text-transform: uppercase;
  width: max-content;
  padding: 0.1rem 0.4rem;
  border: none;
  cursor: pointer;
  margin-inline: 0.5em;
  margin-block: 0.3em;

  border: ${(props) =>
    props.active ? "2px solid black" : "2px solid #e0e0e0"};

  :hover {
    border: 2px solid black;
  }
`
