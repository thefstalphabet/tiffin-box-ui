import styled from "styled-components";
import { bgColour } from "../../Configs/GlobalColour";

export const Container = styled.div`
    @media (min-width: 1000px) {
        display: none; 
    }
`;

export const SideMenu = styled.div`
    position: fixed;
    right: 0rem;
    top: 0;
    height: 100%;
    padding: 0.5rem;
    width: 292px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: ${bgColour};
    .header{
        text-align: right;
        padding: 1em 1.25rem;
    }
    .ant-menu:where(.css-dev-only-do-not-override-65e62w).ant-menu-light.ant-menu-root.ant-menu-inline{
        border-inline-end: none
        
    }
    .login-btn{
        padding: 0.5em 1.25rem;
    }
`;