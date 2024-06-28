import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .plus-icon {
    display: flex;
    justify-content: center;
  }
`;
