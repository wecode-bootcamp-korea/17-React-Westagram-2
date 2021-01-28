import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss"


class Login extends React.Component {

    state = {
        id: '',
        password: '',
        opacity: "0.3"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const validation = this.state.id.indexOf("@") && this.state.password >= 5
        validation ? this.setState({ opacity: "1" }) : this.setState({ opacity: "0.3" });
    }

    render() {
        return (
            <section className="login_page">
                <main className="login_container">

                    <div className="login_form">
                        <h1>Westagram</h1>

                        <div className="input_container">
                            <input className="input_id" type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일" value={this.state.id} onChange={this.handleChange} />
                            <input className="input_password" type="password" name="password" placeholder="비밀번호" value={this.state.password} onChange={this.handleChange} onKeyPress={this.onKeyPress} />
                            <input className="login_button" type="button" value="로그인" onClick={this.goToValidate} style={{ opacity: this.state.opacity }} />
                        </div>

                        <div className="or_container">
                            <div></div>
                            <h1 className="text_or">또는</h1>
                            <div></div>
                        </div>

                        <div className="facebook_login_link">
                            <a className="facebook_login_text" href="#"><i className="fab fa-facebook-square"></i>Facebook으로 로그인</a>
                            <a href="#" tabindex="0">비밀번호를 잊으셨나요?</a>
                        </div>

                    </div>

                    <div className="has_account">
                        <p className="has_account_content">계정이 없으신가요?
                        <Link to="/" className="signupBtn">가입하기</Link>
                        </p>
                    </div>

                    <div className="download_APP">
                        <div>
                            <p>앱을 다운로드하세요.</p>
                        </div>
                        <div className="download_button">
                            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img alt="App Store에서 이용 가능"
                                className="apple_icon"
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" /></a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D252CCB11-1A79-40CC-AB09-E55D439CD8BB%26utm_content%3Dlo%26utm_medium%3Dbadge"><img
                                    alt="Google Play에서 이용 가능" className="googleplay_icon"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" /></a>
                        </div>op-
                    </div>

                </main>
            </section>
        )
    }
}
export default withRouter(Login);