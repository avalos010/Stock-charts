export function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-outline-${type}`}>
      {text}
    </button>
  );
}

interface ButtonProps {
  text: string;
  type: "primary" | "secondary" | "light" | "dark";
  onClick?: () => any;
}
