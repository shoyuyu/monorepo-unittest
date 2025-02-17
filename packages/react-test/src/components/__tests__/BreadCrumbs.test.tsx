import { render, screen } from '@testing-library/react';
import { BreadCrumbs, BreadCrumbsProps } from '../BreadCrumbs';

describe('BreadCrumbs コンポーネントのテスト', () => {
  const defaultProps: BreadCrumbsProps = {
    label: 'Page',
    size: 'default',
    count: 3,
  };

  it('指定された数のパンくずリストアイテムがレンダリングされること', () => {
    render(<BreadCrumbs {...defaultProps} />);
    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(defaultProps.count!);
  });

  it('正しいラベルでパンくずリストアイテムがレンダリングされること', () => {
    render(<BreadCrumbs {...defaultProps} />);
    for (let i = 0; i < defaultProps.count!; i++) {
      expect(screen.getByText(`Page ${i + 1}`)).toBeInTheDocument();
    }
  });

  it('size プロパティに基づいて正しいクラスが適用されること', () => {
    const { rerender } = render(<BreadCrumbs {...defaultProps} size="is-small" />);
    expect(screen.getByRole('navigation')).toHaveClass('my-ds-breadcrumbs is-small');

    rerender(<BreadCrumbs {...defaultProps} size="is-normal" />);
    expect(screen.getByRole('navigation')).toHaveClass('my-ds-breadcrumbs is-normal');

    rerender(<BreadCrumbs {...defaultProps} size="is-large" />);
    expect(screen.getByRole('navigation')).toHaveClass('my-ds-breadcrumbs is-large');
  });
});
