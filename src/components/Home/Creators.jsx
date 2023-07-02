import { SwiperCreators } from "./SwiperCreators"

import calango from "../../assets/images/FakeAPIImages/Creators/9_2_7_790_CALANGO.png"
import gabi from "../../assets/images/FakeAPIImages/Creators/11_4_2_259_Designsemnome1.png"
import luba from "../../assets/images/FakeAPIImages/Creators/12_2_6_600_gqmhTi9g.png"
import orichinho from "../../assets/images/FakeAPIImages/Creators/13_2_0_099_IbM5KwVw.png"
import matt from "../../assets/images/FakeAPIImages/Creators/20_6_8_806_mattperfil.png"
import inutilismo from "../../assets/images/FakeAPIImages/Creators/9_2_0_066_INUTILISMO.png"
import castro from "../../assets/images/FakeAPIImages/Creators/9_2_2_231_CASTROSBROTHERS.png"
import nostalgia from "../../assets/images/FakeAPIImages/Creators/9_2_9_922_NOSTALGIA.png"
import felps from "../../assets/images/FakeAPIImages/Creators/9_4_1_139_Design_sem_nome_1.png"
import styled from "styled-components"
import { SwiperCategories } from "./SwiperCategories"

export const Creators = () => {
  const ListCreators = [
    calango,
    gabi,
    luba,
    orichinho,
    matt,
    inutilismo,
    castro,
    nostalgia,
    felps,
    calango,
    gabi,
    luba,
    orichinho,
    matt,
    inutilismo,
    castro,
    nostalgia,
    felps,
  ]
  const ListCategories = [
    "Destaques",
    "Cultura Pop",
    "Games",
    "Beauty",
    "Humor",
    "Entretenimento",
    "Lifestyle",
  ]

  return (
    <>
      <CreatorsTitle>
        Encontre os produtos de seus creators favoritos
      </CreatorsTitle>
      <SwiperCategories categories={ListCategories} />
      <SwiperCreators creators={ListCreators} />
    </>
  )
}

const CreatorsTitle = styled.h1``
