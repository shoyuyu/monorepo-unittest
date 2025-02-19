
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemberList } from '../MemberList/MemberList';
import { members } from "../MemberList/member";


describe('MemberList', () => {
  test("メンバー情報が表示されること", () => {
    render(<MemberList members={members} />);
    members.forEach(member => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.message)).toBeInTheDocument();
    });
  });

  test('メンバー情報がない場合にメッセージが表示されること', () => {
    const members: { name: string; message: string; }[] = [];
    render(<MemberList members={members} />);
    expect(screen.getByText('メンバー情報はありません')).toBeInTheDocument();
  });
});