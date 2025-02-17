type Size = 'default' | 'is-small' | 'is-normal' | 'is-large';

export interface BreadCrumbsProps {
  label?: string;

  size?: Size;

  count?: number;
}

export const BreadCrumbs = ({ label, size, count }: BreadCrumbsProps) => {
  const styleAdditional = (size?: Size) => {
    const tmp = ['my-ds-breadcrumbs'];
    if (size && size !== 'default') tmp.push(size);
    if (size === 'default' || size === 'is-normal') tmp.push('is-normal');
    return tmp.join(' ');
  };

  const items = [];
  for (let i = 0; i < (count || 0); i++) {
    items.push(
      <li key={i}>
        <a href="/" onClick={(e) => e.preventDefault()}>
          {label} {i + 1}
        </a>
      </li>,
    );
  }

  return (
    <nav className={styleAdditional(size)}>
      <ul>{items}</ul>
    </nav>
  );
};