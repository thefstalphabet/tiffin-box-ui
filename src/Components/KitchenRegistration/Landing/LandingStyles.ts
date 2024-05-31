import styled from "styled-components";
import { textGray } from "../../../Configs/GlobalColour";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 3rem;
    justify-items: center;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 1000px) {
        align-items: center;
        text-align: center;
    }
    .taglines{
        max-width: 44rem;
        h1{
            font-size: 2.5rem;
        }
        p{
            color: ${textGray};
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }
`;
export const Image = styled.div`
    display: grid;
    justify-content: center;
`;