import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { useSelector } from 'react-redux';

const Container = styled.div`
        flex:1.2;
        background-color: ${({ theme }) => theme.bgLighter};
        height:100vh;
        color: ${({ theme }) => theme.text}; 
        font-size: 0.8rem;
        position: sticky;
        top: 0;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 0.4rem;
            background-color: ${({ theme }) => theme.scrollTrack};
        }
        &::-webkit-scrollbar-thumb {
            border-radius:10px;
            background-color: ${({ theme }) => theme.scroll};
        }
        &::-webkit-scrollbar-track-piece {
            margin:0.4rem;
        }
    `

const Wrapper = styled.div`
        padding: 1.2rem 1.5rem;
    `

const Logo = styled.div`
        display: flex;
        gap: 0.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        align-items: center;
        font-size: 1rem;
    `

const Img = styled.img`
        height: 1.4rem;
    `

const Item = styled.div`
        display: flex;
        align-items: center;
        gap: 1.25rem;
        cursor: pointer;
        padding: 0.25rem;
        font-weight: 400;
        border-radius: 7px;
        &:hover{
            background-color: ${({ theme }) => theme.soft};
        }
    `

const Hr = styled.hr`
        margin: 15px 0px;
        border: 0.5px solid ${({ theme }) => theme.soft};
    `
const Login = styled.div``
const Button = styled.button`
        padding: 5px 15px;
        background-color: transparent;
        border: 1px solid #3ea6ff;
        color: #3ea6ff;
        border-radius: 3px;
        font-weight: 500;
        margin-top: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    `
const Title = styled.h2`
        font-size: 14px;
        font-weight:500;
        color: #aaaaaa;
        margin-bottom: 1rem;
    `

const Menu = ({ darkMode, setDarkMode }) => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={logo} />
                        VideoShare
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <ExploreOutlinedIcon />
                        Explore
                    </Item>
                </Link>
                <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <SubscriptionsOutlinedIcon />
                        Subscriptions
                    </Item>
                </Link>
                <Hr />
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                {!currentUser &&
                    <>
                        <Login>
                            Sign in to press like, comment, and subsribe.
                            <Link to="signin" style={{ textDecoration: "none" }}>
                                <Button> <AccountCircleOutlinedIcon />SIGN IN</Button>
                            </Link>
                        </Login>
                        <Hr />
                    </>}

                <Title>Best of VideoShare</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu