import { fireEvent, render, screen } from '@testing-library/react';
import { FormEvent } from '../FormEvent';

test("ボタン押下でイベントハンドラが実行されること", () => {
  const mockFn = jest.fn();
  render(<FormEvent onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});