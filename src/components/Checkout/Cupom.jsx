import { useState } from "react"
import { CompleteButton } from "./CompleteOrder"
import {
  LineWrapper,
  ResumeInput,
  SpacedLineVert,
  ClicableSpan,
} from "./OrderResume"
import { checkCupom } from "../../api/api"

export const Cupom = ({ setTotals }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cupomInput, setCupomInput] = useState({ value: "", error: false })

  function handleChangeInput(e) {
    setCupomInput({ value: e.target.value, error: false })
  }

  async function handleCupom() {
    const data = await checkCupom(cupomInput)
    if (data && data.desc < 1) {
      setTotals((state) => ({ ...state, final: state.final * data.desc }))
      return
    }
    setCupomInput((state) => ({ ...state, error: true }))
  }

  return (
    <SpacedLineVert>
      <LineWrapper>
        <span>Cupom de desconto</span>
        <ClicableSpan
          $textDecoration={!isOpen && "underline"}
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? "X" : "Adicionar"}
        </ClicableSpan>
      </LineWrapper>
      {isOpen && (
        <LineWrapper>
          <ResumeInput
            $error={cupomInput.error}
            value={cupomInput.value}
            onChange={handleChangeInput}
            placeholder="Ex.: Cupom123"
            type="text"
          />
          <CompleteButton type="button" onClick={handleCupom}>
            Aplicar
          </CompleteButton>
        </LineWrapper>
      )}
    </SpacedLineVert>
  )
}
