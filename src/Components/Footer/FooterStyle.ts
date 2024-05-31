import styled from "styled-components";
export const Container = styled.div`
  background-color: #232b2b;
  gap: 1rem;
  .sub_container {
    padding: 2rem;
  }
  .footer_text {
    display: flex;
    justify-content: center;
    padding: 1rem;
    p {
      font-size: 15px;
      font-weight: 500;
      color: white;
    }
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  gap: 1.5rem;
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
  margin-top: 1.5rem;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    color: white;
    font-size:large;
  }
`;
