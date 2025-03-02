import useTheme from './useTheme';

const MyComponent: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Change to Dark Theme</button>
    </div>
  );
};

export default MyComponent;

