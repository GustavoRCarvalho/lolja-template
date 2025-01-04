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
    const data = await checkCupom(cupomInput.value)
    if (data) {
      setTotals((state) => {
        const final = state.sub - state.sub * data.desc + state.ship

        return {
          ...state,
          desc: data.desc,
          final: final,
          installmentsPrice: final / 6,
        }
      })
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
          <CompleteButton
            disabled={cupomInput.value.length === 0}
            type="button"
            onClick={handleCupom}
          >
            Aplicar
          </CompleteButton>
        </LineWrapper>
      )}
    </SpacedLineVert>
  )
}
