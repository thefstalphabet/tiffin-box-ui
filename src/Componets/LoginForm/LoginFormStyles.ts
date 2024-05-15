import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  h1 {
    align-items: center;
    text-align: center;
    justify-content: center;
    color: green;
  }
  h2{
    margin-top: 1rem;
  }
  .centered {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 2rem;
    margin:3rem
  }
  .check_Icon{
    position: absolute;
    top: 24.5rem;
    right: 46.5rem;
}
`;
export const UserType = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 2rem;
  img {
    height: 18vh;
    width: 10vw;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .image_box {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;
export const Tittle = styled.div`
  margin-top: 2rem;
  h3 {
    align-self: center;
    text-align: center;
  }
  p {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
`;
export const SignView = styled.div`
  display: grid;
  grid-template-columns: 1fr auto; /* One column for text content, one column for the button */
  align-items: center;
  margin-top: 1.5rem;
  .account_container {
    text-align: left;
    display: flex;
  }

  .account_container h3,
  .account_container p {
    margin: 0;
  }
  p {
    display: flex;
    justify-content: center;
    color: green;
    margin-left: 1rem;
    align-self: center;
  }
`;
