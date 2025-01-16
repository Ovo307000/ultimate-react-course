interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button(props: ButtonProps): React.ReactNode {
  const { children, onClick } = props;

  return (
    <button className="btn-toggle" onClick={onClick}>
      {children}
    </button>
  );
}
