import * as React from 'react';
import { LofmClient } from '../http/lofm-client';
import { UserCard } from './user-card';
import { USERS } from '../model/user';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppProps {}

export default function IApp(props: IAppProps) {
    return (
        <div>
            <h1>Welcome to League of Free Meals</h1>
            <div>
                {USERS.map((user) => {
                    return (
                        <UserCard key={user.playerName} name={user.playerName} profileImageSrc={user.profileImageSrc} />
                    );
                })}
            </div>
        </div>
    );
}
