import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1>회원가입 페이지</h1>
            <form>
                <label>
                    이메일: <input type="email" name="email" />
                </label>
                <br />
                <label>
                    비밀번호: <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
