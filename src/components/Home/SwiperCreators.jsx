import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { ContentContainer } from "../common/ContentLimit"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./SwiperCreators.css"

import calango from "../../assets/images/FakeAPIImages/Creators/9_2_7_790_CALANGO.png"
import gabi from "../../assets/images/FakeAPIImages/Creators/11_4_2_259_Designsemnome1.png"
import luba from "../../assets/images/FakeAPIImages/Creators/12_2_6_600_gqmhTi9g.png"
import orichinho from "../../assets/images/FakeAPIImages/Creators/13_2_0_099_IbM5KwVw.png"
import matt from "../../assets/images/FakeAPIImages/Creators/20_6_8_806_mattperfil.png"
import inutilismo from "../../assets/images/FakeAPIImages/Creators/9_2_0_066_INUTILISMO.png"
import castro from "../../assets/images/FakeAPIImages/Creators/9_2_2_231_CASTROSBROTHERS.png"
import nostalgia from "../../assets/images/FakeAPIImages/Creators/9_2_9_922_NOSTALGIA.png"
import felps from "../../assets/images/FakeAPIImages/Creators/9_4_1_139_Design_sem_nome_1.png"

export const SwiperCreators = () => {
  function creatorsList() {
    const List = [
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
    return List.map((creator, index) => (
      <SwiperSlide key={creator + index}>
        <CreatorImage src={creator} />
      </SwiperSlide>
    ))
  }

  return (
    <SwiperContainer>
      <SwiperComponent
        slidesPerView={8}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {creatorsList()}
      </SwiperComponent>
    </SwiperContainer>
  )
}

const CreatorImage = styled.img`
  border-radius: 50%;
  width: 80%;
`

const SwiperContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
`

const SwiperComponent = styled(Swiper)`
  padding-bottom: 2rem;
  margin-inline: 5%;
`
