import React from "react";
import styled from "styled-components";

interface UserCardProps {
    name: string;
    score: number;
}

const UserCardBox = styled.div({
    background: '#e6f0fc',
    height: '200px',
    width: '200px',
    padding: '10px'
});

export class UserCard extends React.Component<UserCardProps> {
    constructor(props: UserCardProps) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <UserCardBox>
                <p>{this.props.name}</p>
                <p>{this.props.score}</p>
            </UserCardBox>
        );
    }

}
