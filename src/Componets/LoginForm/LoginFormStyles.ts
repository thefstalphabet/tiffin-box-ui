import styled from "styled-components";

export const Container = styled.div`
  .signup_account {
    display: flex;
    justify-content: flex-end;
    margin: 2rem;
    p {
      margin-left: 10px;
      color: green;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0 auto; 
  max-width: 600px; 
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px; 
  h1 {
    text-align: center;
    color: green;
  }
  h3 {
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    margin-top: 1rem;
  }
  .customContextMenu {
  display: flex;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  left: 11.5rem;
}
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Action = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-top: 1.5rem;
  p {
    color: green;
  }
`;
