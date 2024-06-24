import styled from "styled-components";
export const MenuContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 90vw;
  gap: 1rem;
  margin-top: 3rem;
  background-color: white;
  margin: auto;

  .re-menu{
    width: 12rem;
    height: 100%;
  }

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

    .re-menu{
      width: 100%;
      height: 100%;
    }

    .component-container {
      flex-grow: 1;
      display: none;
    }

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