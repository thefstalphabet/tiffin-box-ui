import styled from "styled-components";
import {textGray} from "../../Configs/GlobalColour";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Banner = styled.div`
  display: flex;
  gap: 0.5rem;
  .right {
    display: grid;
    gap: 0.5rem;
  }
`;
export const Header = styled.div`
  display: grid;
  gap: 1rem;
  .stats {
    display: flex;
    gap: 1rem;
    .stat {
      display: flex;
      align-items: center;
      span{
        font-size: 13px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
        color: ${textGray};
        text-decoration: underline;
      }
    }
  }
`;
