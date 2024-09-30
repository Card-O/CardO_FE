import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        
        <div>
            시작
            <br></br>
            <Link to="/main">

                <button>메인 화면으로 접속</button>
            </Link>

            <Link to="/signup">
                <button>회원가입</button>
            </Link>

            
            <Link to="/editPanel">
                <button>에디트페이지</button>
            </Link>
        </div>
    );
};
export default Home;