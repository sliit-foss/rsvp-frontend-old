import React from "react";
import "./LoginPage.scss";
import flashIconImage from "../../assets/images/login/119532511-93f.png";
import googleIconImage from "../../assets/images/login/icons8-google.svg";

const LoginPage = () => {
  return (
    <div className="mainContainer">
      <div className="content-div">
        <div className="content">
          <div className="formDiv">
            <div className="iconDiv">
              <img
                className="iconDivImage"
                src={flashIconImage}
                alt="smallPic"
              />
            </div>
            <div className="LoginHeaderDiv">
              <h5>Login</h5>
              <p>See your growth and get consulting support!</p>
            </div>
            <div className="googleButtonDiv">
              <button className="btn btn-default btn-google">
                <img src={googleIconImage} alt="googleIcon" height="28" />
                Sign in with Google
              </button>
              <div className="breakDiv">
                <span className="span" />
                <p>or Sign in with Email</p>
                <span className="span" />
              </div>
            </div>
            <form action="">
              <div className="col-sm-12 col-md-5 col-lg-7 inputDiv">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="col-sm-12 col-md-5 col-lg-7 inputDiv">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="col-sm-12 col-md-5 col-lg-7 rememberAndForgetDiv">
                <div className="rememberIdv">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember</label>
                </div>
                <div className="ForgetPasswordDiv">
                  <a href="#">Forget Password</a>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-7 d-flex justify-content-center align-item-center">
                <button className="btn btn-login col-12">Login</button>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-7 createAccLinkDiv">
                <p>Not Registered yet ?</p>
                <a href="/">Create An Account</a>
              </div>
            </form>
          </div>
        </div>
        <div className="content" id="content2">
          <div className="imageDiv" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
/*
<div className="col-sm-12 col-md-6 col-lg-6 bg-success">
  <div className="col-12">
    <div>
      <h4>Login</h4>
      <p>See your growth and get consulting support!</p>
    </div>
    <div>
      <button className="btn btn-primary">Sign in with Google</button>
      <div className="breakDiv">
        <span className="span"/>
        <p>See your growth and get consulting support!</p>
        <span className="span"/>
      </div>
    </div>
    <div className='formDiv'>
      <form action="">
        <div className="col-6">
          <label htmlFor="email">Email*</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
        </div>
        <div className="col-6">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" id="password" placeholder="password"/>
        </div>
        <div className="col-6 rememberAndForgetDiv">
          <div className='rememberIdv'>
            <input type="checkbox" name="remember" id="remember"/>
            <label htmlFor="remember">Remember</label>
          </div>
          <div className='ForgetPasswordDiv'>
            <a href="#">Forget Password</a>
          </div>
        </div>
        <div className="col-6 bg-success d-flex justify-content-center align-item-center">
          <button className="btn btn-primary col-10">Login</button>
        </div>
        <div className="col-6 createAccLinkDiv">
          <p>Not Registered yet?</p><a href="/">Create An Account</a>
        </div>
      </form>
    </div>
  </div>
</div>
< div
className = "col-sm-12 col-md-6 col-lg-6 bg-warning" >

  < /div>*/
