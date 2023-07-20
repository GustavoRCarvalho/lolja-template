import styled from "styled-components"

export const Options = ({ options, productOptions, setProductOptions }) => {
  const optionsKeys = Object.keys(options ?? {})
  return (
    <OptionsContainer>
      {optionsKeys.map((option) => {
        return (
          <OptionsWrapper key={option}>
            <OptionsTitle>{option}</OptionsTitle>
            <div>
              {options[option].map((label) => (
                <OptionButton
                  type="button"
                  key={label}
                  active={productOptions?.[option] === label}
                  onClick={() =>
                    setProductOptions((value) => {
                      return { ...value, [option]: label }
                    })
                  }
                >
                  {label}
                </OptionButton>
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

  max-width: 100%;

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
  width: max-content;

  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.23em;
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;

  border: none;
  border-radius: 0.2rem;
  padding: 0.1rem 0.4rem;
  margin-inline: 0.5em;
  margin-block: 0.3em;

  border: ${(props) =>
    props.active ? "2px solid black" : "2px solid #e0e0e0"};

  :hover {
    border: 2px solid black;
  }
`
