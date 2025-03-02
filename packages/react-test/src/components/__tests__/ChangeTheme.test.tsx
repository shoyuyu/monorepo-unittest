import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../ContextAPI/ThemeContext';
import ChangeTheme from '../ContextAPI/ChangeTheme'

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

test('現在のテーマが表示されること、テーマの変更がされていること', () => {
  renderWithProvider(<ChangeTheme />);

  // 初期テーマが表示されていることを確認
  expect(screen.getByText(/current theme: light/i)).toBeInTheDocument();

  // ボタンをクリックしてテーマを変更
  fireEvent.click(screen.getByText(/change to dark theme/i));

  // 変更後のテーマが表示されていることを確認
  expect(screen.getByText(/current theme: dark/i)).toBeInTheDocument();
});
