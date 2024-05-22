import styled from "styled-components";
import { primaryColor } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${primaryColor};
  padding: 1rem;
`;
export const subContainer = styled.div`
  width: 200px;
  margin: 10px;
  text-align: center;
  color: white;
`;
