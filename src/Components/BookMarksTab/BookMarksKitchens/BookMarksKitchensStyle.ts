import styled from "styled-components";
export const Container = styled.div`
  height: "100%"; 
  padding: 0.5rem; 
  background-color: bgGray;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .card {
      width: 15rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
`;
