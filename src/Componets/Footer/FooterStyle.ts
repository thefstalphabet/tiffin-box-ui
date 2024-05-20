import { subContainer } from "./../KitchenRegistration/Stats/StatsStyle";
import styled from "styled-components";
import { textGray } from "../../Configs/GlobalColour";
export const Container = styled.div`
  background-color: #232b2b;
  gap: 1rem;
  .sub_container {
    padding: 1rem;
  }
  .footer_text {
    display: flex;
    background-color: red;
    justify-content: center;
    padding: 1rem;
    background-color: black;
    p {
      font-size: 15px;
      font-weight: 500;
      color: white;
    }
  }
`;
export const SocailMedia = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  align-self: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 1rem;
  }
`;
export const MenuItems = styled.div`
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    color: white;
    font-size:large;
  }
`;
