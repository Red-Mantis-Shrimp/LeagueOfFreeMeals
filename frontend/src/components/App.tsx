import * as React from "react";
import { LofmClient } from "../http/lofm-client";
import { UserCard } from "./user-card";
import { USERS } from "../model/user";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return (
    <div>
      <h1>Welcome to League of Free Meals</h1>
      <div>
        {
          USERS.map(user => {
            return <UserCard name={user.playerName} summonerId={user.summonerId} profileImageSrc={user.profileImageSrc} />
          })
        }
      </div>
    </div>
  );
}
