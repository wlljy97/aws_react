/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Styles.js'; /** * as S *로 표시하지 않고 S로 표시하겠다. */


function MyPage(props) {
    // 초기값
    const defaultProfileImgSrc = useState( "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg");
    
    const profileImgSrc = localStorage.getItem("profileImg")
    
    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);

    const profileFileInput = useRef(); // document.requierment 대신 ref 를 사용 선택할 때 사용

    const localStorgeUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorgeUser?.username && localStorgeUser.username,
        name: localStorgeUser?.name && localStorgeUser.name,
        email: localStorgeUser?.email && localStorgeUser.email
    }
    // '?' : 없을 수 있다.

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();

        reader.onload = (e) => {  // 함수실행x 함수정의
            setProfileImg(e.target.result); //result 안에는 e.target.files[0] 값이 있음
            console.log(profileImg);
        }

        reader.readAsDataURL(e.target.files[0]);

    }

        const handleInputChange = (e) => {
            const { name, value } = e.target;
                user = {
                ...user,
                [name] : value
            }
        }

        const handleSaveClick = () => {
            console.log(user);
            console.log(profileImg);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("profileImg", profileImg);
        }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfilImgBox} onClick={handleProfileImgChangeClick}>

                    <img css={S.SProfileImg} src={profileImg} />
                    
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect} />
                </div>
            </div>
            <div css={S.SContainer}>
                <div >
                    <label css={S.STitle} htmlFor="username">사용자명</label> 
                    <input type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username} />
                </div>
                <div>
                    <label css={S.STitle} htmlFor="name">이름</label>
                    <input type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name} />
                </div>
                <div>
                    <label css={S.STitle} htmlFor="email">이메일</label>
                    <input type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email} />
                </div>
                <div>
                    <button css={S.SBtn} onClick={handleSaveClick} >저장</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;