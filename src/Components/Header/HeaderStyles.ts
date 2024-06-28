import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 2rem 8rem;
  h1 {
    white-space: nowrap;
  }
  .content {
    display: flex;
    gap: 1rem;
    .re-menu{
      border-bottom: none;
      flex: auto;
      @media (max-width: 1097px) {
        display: none;
      }
    }
  }
  @media (max-width: 1097px) {
    padding: 2rem 1rem;
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
    @media (min-width: 1097px) {
      display: none;
    }
  }
`;
