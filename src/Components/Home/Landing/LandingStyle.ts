import styled from "styled-components";
import { homeImg } from "../../../Assets";
export const Container = styled.div``;
export const HeroSection = styled.div`
  height: 100vh;
  /* width: 100vw; */
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .heading {
    align-items: center;
    h1 {
      align-self: center;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    p {
      font-size: 25px;
      font-weight: 700;
      margin-top: 1rem;
    }
  }
`;
export const cardSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
