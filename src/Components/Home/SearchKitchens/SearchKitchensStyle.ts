import styled from "styled-components";
import { bgColour, primaryColor } from "../../../Configs/GlobalColour";

export const Container = styled.div`
  background-color: ${primaryColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ffffff;
  width: 30rem;
  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
  .taglines {
    max-width: 44rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
  .search-bar-and-list{
    position: relative;
    background-color: ${bgColour};
    width: 100%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    .search-bar{
      height: 40px;
    }
    .list {
      position: absolute;
      width: 100%;
      margin-top: 0.5rem;
      overflow-y: scroll;
      max-height: 20rem;
    }
  }
`;
export const Image = styled.div`
  display: grid;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const cardSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
