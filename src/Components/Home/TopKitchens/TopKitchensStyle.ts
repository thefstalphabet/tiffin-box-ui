import styled from "styled-components";
export const Conatainer = styled.div`
  h3 {
    align-self: center;
    text-align: center;
    font-size: 1.5rem;
  }
`;
export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
