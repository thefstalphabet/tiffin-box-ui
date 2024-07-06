import styled from "styled-components";
export const Container = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .card {
      width: 18rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
`;
