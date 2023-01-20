export function Button({ text, type, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline-${type} ${className}`}
    >
      {text}
    </button>
  );
}

interface ButtonProps {
  text: string | number;
  type: "primary" | "secondary" | "light" | "dark";
  onClick?: () => any | void;
  className?: string;
}
