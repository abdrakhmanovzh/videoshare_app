import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link, useNavigate } from 'react-router-dom';
import Upload from './Upload'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import axios from 'axios';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 4rem;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.5rem;
    position: relative;
`
const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    outline:none;
    font-size: 1rem;
`
const Button = styled.button`
    padding: 0.3rem 0.9rem 0.3rem 0.6rem;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`
const Avatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #999;
`

const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate()
    const [q, setQ] = useState('');
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const handleLogout = async () => {
        console.log("beenaenajekab")
        const res = await axios.post('/auth/logout');
        console.log(res)
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Search>
                        <Input placeholder='Search' onChange={(e) => setQ(e.target.value)} />
                        <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
                    </Search>
                    {currentUser ? (
                        <>
                            <User>
                                <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
                                <Avatar src={currentUser.img} />
                                {currentUser.name}
                                <button onClick={handleLogout}>
                                    <LogoutOutlinedIcon />
                                </button>
                            </User>
                        </>
                    ) : (
                        <Link to="signin" style={{ textDecoration: "none" }}>
                            <Button>
                                <AccountCircleOutlinedIcon />
                                SIGN IN
                            </Button>
                        </Link>)}
                </Wrapper>
            </Container>
            {open && <Upload setOpen={setOpen} />}
        </>
    )
}

export default Navbar