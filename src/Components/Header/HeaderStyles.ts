import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 3rem 8rem;
  @media (max-width: 1097px) {
    padding: 3rem 1rem;
  }
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
    .re-menu:where(.css-dev-only-do-not-override-65e62w).ant-menu-light.ant-menu-root.ant-menu-inline{
      border: none;
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
