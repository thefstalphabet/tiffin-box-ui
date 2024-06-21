import {primaryColor } from "../../Configs/GlobalColour";
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

    h3 {
      color: white;
    }
  }

  .email_container {
    p {
      color: white;
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }

  .update-btn{
    display: flex;
    align-items: flex-end;
    text-align: end;
  }
  .primary-button-container {
    align-self: flex-end;
    margin-top: auto;
  }

  .primary-button {
    background-color: transparent;
    border-color: white;
    color: white;
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
      .email_container {
        margin-top: 1rem;
        flex-direction: column;
        align-items: center;
        p {
          color: white;
        }
      }
    }
    .primary-button-container {
      align-self: center;
    }
  }
`;

