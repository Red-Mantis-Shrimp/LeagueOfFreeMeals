import * as React from "react";
import { UserCard } from "./user-card";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  return (
    <div>
      <h1>Welcome to League of Free Meals</h1>
      <UserCard name="User" score={1} />
    </div>
  );
}
