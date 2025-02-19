import { members } from './member';

type Items = {
  name: string;
  message: string;
};

export interface MemberListProps {
  members: Items[];
};

export const MemberList = ({ members }: MemberListProps) => {
  return (
    <div>
      {members.length? (
        <ul>
          {members.map((member) => (
            <li key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>メンバー情報はありません</p>
      )}
    </div>
  )
}

export const App = () => {
  return (
    <MemberList members={members} />
  );
};