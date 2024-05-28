import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 3rem 8rem;
  @media (max-width: 1072px) {
    padding: 3rem 1rem;
  }
  h1 {
    white-space: nowrap;
  }
  .content {
    display: flex;
    gap: 4rem;
    align-items: center;
    .re-menu{
      border-bottom: none;
      flex: auto;
    }
  }
  @media (max-width: 1072px) {
    padding: 3rem 2rem;
  }
`;
export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: right;
  .toggle-icon {
    cursor: pointer;
    font-size: 1.75rem;
    @media (min-width: 1072px) {
      display: none;
    }
  }
`;
