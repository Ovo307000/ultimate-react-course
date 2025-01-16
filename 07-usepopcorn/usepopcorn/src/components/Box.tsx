interface BoxProps {
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  const { children } = props;

  return <div className="box">{children}</div>;
}
