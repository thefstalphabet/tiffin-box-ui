import styled from "styled-components";
export const FormContainer = styled.div`
  padding: 2rem;
  border-radius: 5px;
  .heading {
    text-align: center;
    margin-bottom: 1rem;
    font-weight:bold;
    font-size: larger;
  }
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;
export const Action = styled.div`
display: flex;
align-items: center;
justify-content: center;
  .signup_btn {
   margin-top: 1rem;
   align-items: center;
  }
`;
