import styled from "styled-components";
export const FormContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  width: 35rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  .heading {
    text-align: center;
    margin-bottom: 1rem;
    font-weight:bold;
    font-size: larger;
  }
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Action = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  .signup_btn {
    justify-self: end;
  }
`;
