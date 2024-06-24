import { primaryColor, textWhite } from "../../Configs/GlobalColour";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-color: ${primaryColor};
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;

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
  }
  .primary-button {
    background-color: transparent;
    border-color: white;
    color: white;
  }
  .form-fields{
    display: grid;
    grid-auto-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
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

