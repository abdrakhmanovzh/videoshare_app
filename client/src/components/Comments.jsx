import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    padding: 5px;
    outline: none;
    width: 100%;
`

const Comments = ({ videoId }) => {

    const { currentUser } = useSelector((state) => state.user)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/comments/${videoId}`);
                setComments(res.data);
            } catch (error) { }
        }
        fetchComments()
    }, [videoId])

    return (
        <Container>
            <NewComment>
                <Avatar src={currentUser?.img} />
                <Input placeholder='Add a comment' />
            </NewComment>
            {comments.map(comment => (
                <Comment key={comment._id} comment={comment} user={currentUser} />
            ))}
        </Container>
    )
}

export default Comments