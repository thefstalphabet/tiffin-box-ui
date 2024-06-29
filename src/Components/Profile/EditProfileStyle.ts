import { primaryColor, textWhite } from "../../Configs/GlobalColour";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primaryColor};
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    div {
      line-height: 1.5;
      h3, p {
        color: ${textWhite};
      }
    }
    .edit-button:hover {
      border-color: white;
      color: white;
    }
  }
  @media (max-width: 768px) {
    gap: 1rem;
    .header {
      flex-direction: column;
      align-items: center;
      h3 {
        text-align: center;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
`;

