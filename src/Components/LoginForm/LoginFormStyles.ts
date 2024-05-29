import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
`;
export const FormContainer = styled.div`
  padding: 2rem;
  max-width: 32rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  .heading {
    display: grid;
    gap: 0.5rem;
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
    margin-top: 5px;
  }
  .customContextMenu {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: end;
    left: 9.5rem;
    top: 6rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Action = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  width: 100%;
  .Forgot_btn {
    justify-self: start;
    color: green;
    padding: 0;
  }
  .Login_btn {
    justify-self: end;
  }
`;
