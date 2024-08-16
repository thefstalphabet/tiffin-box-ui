import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 0 3rem;
  h1 {
    /* margin-bottom: 20px; */
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  text-align: center;
  padding: 1rem 0;
h3{
  padding: 1rem 0;
}
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
