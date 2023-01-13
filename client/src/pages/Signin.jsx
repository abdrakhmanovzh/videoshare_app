import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../redux/userSlice'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border:  1px solid ${({ theme }) => theme.soft};
    margin-top: 5rem;
    padding: 1.5rem 3rem;
`
const Title = styled.h1`
    font-size: 1.5rem;
`
const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    width: 100%;
    border-radius: 3px;
    margin: 0.3rem 1rem;
    padding: 10px;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
`
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    margin:5px 0px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`
const More = styled.div`
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    color: ${({ theme }) => theme.textSoft};
`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 30px;
`


const Signin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try {
            const res = await axios.post("/auth/signin", { name, password });
            dispatch(loginSuccess(res.data))
            navigate('/');
        } catch (error) {
            dispatch(loginFailure())
        }
    }

    const signInWithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result) => {
            axios.post("/auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                img: result.user.photoURL,
            }).then((res) => {
                dispatch(loginSuccess(res.data))
                navigate('/');
            })
        }).catch((error) => {
            dispatch(loginFailure())
        })
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Subtitle>to continue to VideoShare</Subtitle>
                <Input placeholder='username' onChange={e => setName(e.target.value)} />
                <Input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Title>or</Title>
                <Button onClick={signInWithGoogle}>Sign in With Google</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default Signin