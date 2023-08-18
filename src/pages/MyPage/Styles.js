import { css } from "@emotion/react";

// export : 내보내는 것
export const SLayout = css` // SLayout 여기서 S는 Style을 뜻함
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 500px;
    background-image: linear-gradient(90deg, #74B5 0%, #9FA 100%);
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 5px 0px;
    
`;

export const SProfilImgBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
`;

export const SFileHidden = css`
    display: none;

`;

export const SBtn = css`
    margin: 5px;
    
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */

    border: 1px solid #dbdbdb;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
`;

export const STitle = css`
    margin:  5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;