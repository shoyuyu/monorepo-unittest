interface FormEventProps {
onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormEvent = ({onSubmit}: FormEventProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
    >
      <div>
        <button>テスト実行</button>
      </div>
    </form>
  )
}

