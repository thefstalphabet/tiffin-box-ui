import styled from "styled-components";
import { bgGrayDarker } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  background-color: ${bgGrayDarker};
  padding: 2rem 0;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  
  div {
    position: relative;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid gray;
    position: absolute;
    top: -40px;
    left: 20px;
    z-index: 1;
  }

  .ant-card {
    width: 350px;
    padding-top: 40px;
    position: relative;
    z-index: 0;
  }
`;
