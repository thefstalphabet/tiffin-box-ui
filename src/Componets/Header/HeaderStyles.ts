import styled from "styled-components";
import { textGray } from "../../Configs/GlobalColour";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 8rem;
    h1{
        white-space: nowrap;
    }
    .content{
        display: flex;
        gap: 4rem;
        align-items: center;
    }
`;
export const MenuItems = styled.div`
    display: flex;
    gap: 1rem;
    list-style: none;
    align-items: center;
    a{
        color: inherit;
        text-decoration: none;
        font-weight: 500;
        color: ${textGray};
    }
    @media (max-width: 1000px) {
        display: none; 
    }
`;
export const Actions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    .toggle-icon{
        cursor: pointer;
        font-size: 1.75rem; 
        @media (min-width: 1000px) {
            display: none; 
        }
    }
`;