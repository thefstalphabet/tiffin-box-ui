import {primaryColor, textWhite } from "../../Configs/GlobalColour";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 81vh;
  background-color: ${primaryColor};
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    div {
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

