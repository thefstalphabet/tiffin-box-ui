import styled from "styled-components";
import { primaryColor } from "../../../Configs/GlobalColour";
export const Container = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color:${primaryColor};
  padding: 1rem;
`;
export const subContainer = styled.div`
  width: 200px; /* Adjust according to your design */
  margin: 10px; /* Adjust spacing between boxes */
  text-align: center;
  color: white;
`;
