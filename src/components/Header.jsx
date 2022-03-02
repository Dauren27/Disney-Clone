import React, { useEffect } from 'react'
import {auth,provider} from "../firebase"
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                navigate('/')

            }
        })
    },[])

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            navigate('/')
        })
    }
    const signOut=()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        {!userName ? (
            <LoginContainer>
                <Login onClick={signIn}>
                    Login
                </Login>
            </LoginContainer>
            ) :
            <>
                <NavMenu>
                    <a href="">
                        <img src="/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>
                    <a href="">
                        <img src="/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>
                    <a href="">
                        <img src="/images/watchlist-icon.svg" alt="" />
                        <span>WATCHLIST</span>
                    </a>
                    <a href="">
                        <img src="/images/original-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>
                    <a href="">
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>
                    <a href="">
                        <img src="/images/series-icon.svg" alt="" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg onClick={signOut} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
            </>

        }
       
    </Nav>
  )
}

export default Header
const Nav=styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;
`
const Logo=styled.img`
    width: 80px;
`
const NavMenu=styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    a{
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform: scaleX(0);
                transform-origin: left center;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
                transition: 0.25s;
            }
        }
      }
`
const UserImg=styled.img`
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
`
const Login=styled.div`
    cursor:pointer;
      border: 1px solid #f9f9f9;
      padding:8px 16px;
      border-radius: 4px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      background:rgba(0,0,0,0.6);
      transition: all 0.2s ease 0s;
      &:hover{
          background:#f9f9f9;
          color: #000;
          border-color: transparent;
      }
`
const LoginContainer=styled.div`
      flex:1;
      display:flex;
      justify-content: flex-end;
`