import { bgColour, primaryColor } from "./../../Configs/GlobalColour";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 81vh;
  width: "100%";
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
  }
  .email_container {
    display: flex;
    margin-top: 1rem;
    p {
      margin-left: 1rem;
    }
  }
  .primary-button-container {
    align-self: flex-end;
    margin-top: auto;
  }
  .primary-button {
    background-color: transparent;
    border-color: black;
    color: black;
  }
`;
export const MenuConatiner = styled.div`
  display: flex;
  height: 70vh;
  width: 80vw;
  margin-top: 3rem;
  background-color: white;
  margin: auto;
  .remenu_item {
    display: flex;
    width: 20vw;
    background-color: red;

    .re-menu-item {
  text-decoration: none;
  cursor: pointer;
}
  }
  .active-data {
    display: flex;
  }
`;
