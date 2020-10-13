import React from "react";
import styled from "styled-components";
import { LofmClient } from "../http/lofm-client";

interface UserCardProps {
    name: string;
    summonerId: number;
    profileImageSrc: string;
}

interface UserCardState {
    score: number;
}

const UserCardBox = styled.div({
    background: '#e6f0fc',
    margin: '5px',
    height: '200px',
    minWidth: '200px',
    width: '15%',
    padding: '10px',
    float: 'left'
});

const UserProfileImage = styled.img({
    height: '70px',
    width: '70px',
    marginRight: '10px'
})

export class UserCard extends React.Component<UserCardProps, UserCardState> {
    private scoreClient: LofmClient;

    constructor(props: UserCardProps) {
        super(props);

        this.state = {score: 0};
        this.scoreClient = new LofmClient();
    }

    async componentDidMount() {
        const score = await this.scoreClient.getScore(this.props.summonerId);
        console.log(score);
        this.setState({score: score});
    }

    render() {
        return (
            <UserCardBox>
                <div>
                    <UserProfileImage src={this.props.profileImageSrc} />
                    {this.props.name}
                </div>
                <p>{this.state.score}</p>
            </UserCardBox>
        );
    }

}
