import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaHome, FaRocket, FaUser } from "react-icons/fa";

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
      fontSize={["xl", "md"]}
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
    href: "/projects",
    label: "Projects",
    icon: FaRocket,
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
