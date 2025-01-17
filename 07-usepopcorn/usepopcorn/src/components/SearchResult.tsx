interface SearchResultProps {
  children: React.ReactNode;
}

export default function SearchResult(
  props: SearchResultProps
): React.ReactNode {
  const { children } = props;

  return <p className="num-results">{children}</p>;
}
