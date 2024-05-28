import styled from "styled-components";
import { bgGray } from "../../../Configs/GlobalColour";

export const Container = styled.div`
    .content {
        min-height: 40vh;
        line-height: 350px;
        background-color: ${bgGray};
        border: 1px dashed 	#D0D0D0;
        margin-top: 16px;
        margin-left: 0;
        border-radius: 2px;
    }
    .action{
        margin-top: 1rem;
    }
`;
export const Fields = styled.div`
    padding: 1rem;
    display: grid;
    column-gap: 1rem;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1110px) {
        grid-template-columns: 1fr;
    }
`
