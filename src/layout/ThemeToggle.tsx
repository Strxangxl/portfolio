import { MouseEvent, useState } from "react";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunFill />);

  const handleClickToggle = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggleColorMode();
  };

  return (
    <Tooltip label="theme toggle" isOpen={isOpen}>
      <IconButton
        aria-label="theme toggle"
        icon={toggleIcon}
        onClick={handleClickToggle}
        backgroundColor="transparent"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
