import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaHome, FaUser } from "react-icons/fa";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  return (
    <IconButton
      as={Link}
      href={href}
      aria-label={label}
      variant="ghost"
      flexBasis="25%"
      fontSize="md"
      padding={0}
      color="unset"
    >
      {icon({ style: { cursor: "pointer" } })}
    </IconButton>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/",
    label: "Home",
    icon: FaHome,
  },
  {
    href: "/about",
    label: "About",
    icon: FaUser,
  },
];

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation: NavItemProps) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  );
};

export default Navigation;
