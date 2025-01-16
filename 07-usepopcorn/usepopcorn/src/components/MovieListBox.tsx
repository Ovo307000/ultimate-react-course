import Box from "./Box";
import Button from "./Button";

interface MovieListBoxProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function MovieListBox(
  props: MovieListBoxProps
): React.ReactNode {
  const { children, isOpen, toggleOpen: handleToggleOpen } = props;

  function renderButtonText(isOpen: boolean) {
    return isOpen ? "–" : "+";
  }

  return (
    <Box>
      <Button onClick={handleToggleOpen}>{renderButtonText(isOpen)}</Button>
      {isOpen && children}
    </Box>
  );
}
