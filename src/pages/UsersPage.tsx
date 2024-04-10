import { useUsersList } from '../hooks/useUsersList';
import Container from 'react-bootstrap/Container';
import React from 'react'
import { memo } from 'react';
import { UserCard } from '../components/UserCard';

const UsersPage = () => {
    const { users } = useUsersList()
    console.log(users)
    return (
        <Container>
            {
                users && users.map((e, index) => (
                    <UserCard userItem={e}/>
                ))
            }
        </Container>
    );
};

export default memo(UsersPage);
