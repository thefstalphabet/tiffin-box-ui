import styled from "styled-components";

export const Container = styled.div`
  .signup_account {
    display: flex;
    justify-content: flex-end;
    margin: 2rem;
    align-items: flex-end;
    text-align: end;
    align-self: flex-end;
    .Signup_btn {
      color: green;
      text-align: center;
    }
    @media (min-width: 300px) and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      align-self: center;
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
  max-width: 480px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  .Heading {
    display: grid;
    gap: 0.5rem;
  }
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

  p{
    margin-top:5px;
  }
  .customContextMenu {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: end;
    left: 10rem;
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
  }
  .Login_btn {
    justify-self: end;
  }
`;
