import { useState } from "react"
import { CompleteButton } from "./CompleteOrder"
import {
  LineWrapper,
  ResumeInput,
  SpacedLineVert,
  ClicableSpan,
} from "./OrderResume"
import { checkShip } from "../../api/api"

export const Ship = ({ setTotals }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [shipInput, setShipInput] = useState({
    value: "",
    error: false,
  })

  function handleChangeInput(e) {
    let valid = e.target.value.replace(/\D/g, "").split("")
    let newString = ""

    for (let i = 0; valid.length > i; i++) {
      newString += valid[i]
      if (valid.length > 5 && i === 4) {
        newString += "-"
      }
    }

    setShipInput({ value: newString, error: false })
  }

  async function handleShip() {
    const data = await checkShip(shipInput)
    if (data && data.price < 1) {
      setTotals((state) => ({ ...state, final: state.final + data.price }))
      return
    }
    setShipInput((state) => ({ ...state, error: true }))
  }

  return (
    <SpacedLineVert>
      <LineWrapper>
        <span>Entrega</span>
        <ClicableSpan
          $textDecoration={!isOpen && "underline"}
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? "X" : "Calcular"}
        </ClicableSpan>
      </LineWrapper>
      {isOpen && (
        <LineWrapper>
          <ResumeInput
            $error={shipInput.error}
            value={shipInput.value}
            onChange={handleChangeInput}
            placeholder="Ex.: 12345-678"
            maxLength={9}
            type="text"
          />
          <CompleteButton type="button" onClick={handleShip}>
            Calcular
          </CompleteButton>
        </LineWrapper>
      )}
    </SpacedLineVert>
  )
}
