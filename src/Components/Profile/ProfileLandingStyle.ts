import { bgColour, primaryColor } from "./../../Configs/GlobalColour";
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
    margin-top: 1rem;
    p {
      color: white;
    }
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
      p{
        margin-top: 1rem;
      }
    }
    .primary-button-container {
      align-self: center;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 80vw;
  gap: 1rem;
  margin-top: 3rem;
  background-color: white;
  margin: auto;

  .remenu_item {
    display: flex;
    width: 30vw;
    background-color: red;

    .re-menu-item {
      text-decoration: none;
      cursor: pointer;
    }
  }

  .active-data {
    display: flex;
  }

  .menu-buttons {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  .component-container {
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90vw;
    gap: 0;
    margin: 0 auto;
    height: 100vh;

    .remenu_item {
      width: 100%;
    }

    .menu-buttons {
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: 0;
      justify-content: center;
    }
  }
`;
