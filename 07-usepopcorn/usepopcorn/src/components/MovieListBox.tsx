import Box from "./Box";
import Button from "./Button";
interface MovieListBoxProps {
  children: React.ReactNode;
  show: boolean;
  toggleOpen: () => void;
}

export default function MovieListBox(
  props: MovieListBoxProps
): React.ReactNode {
  const { children, show, toggleOpen } = props;

  function renderButtonText(isOpen: boolean) {
    return isOpen ? "–" : "+";
  }

  return (
    <Box>
      <Button onClick={toggleOpen}>{renderButtonText(show)}</Button>
      {show && children}
    </Box>
  );
}
