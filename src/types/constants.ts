import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface linkProps {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks: linkProps[] = [
  {
    name: "GitHub",
    url: "https://github.com/Strxangxl",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ratandeep1509/",
    icon: FaLinkedin,
  },
  {
    name: "dev.to",
    url: "https://dev.to/strxangxl",
    icon: FaDev,
  },
  {
    name: "Medium",
    url: "https://medium.com/@strxangxl",
    icon: FaMedium,
  },
  {
    name: "e-mail",
    url: "mailto:hello@strxangxl?cc=singhratandeep2345@gmail.com",
    icon: FaEnvelope,
  },
];

export default socialLinks;
