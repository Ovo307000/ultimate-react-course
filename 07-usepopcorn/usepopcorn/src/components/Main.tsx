interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps): React.ReactNode {
  const { children } = props;

  return <main className="main">{children}</main>;
}
