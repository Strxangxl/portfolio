import {
  FaDev,
  FaGithub,
  FaInstagram,
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

export const socialLinks: linkProps[] = [
  {
    name: "GitHub",
    url: "https://github.com/Strxangxl",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ratandeep-singh-a539681b0/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/strxangxl",
    icon: FaInstagram,
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
    url: "mailto:hello@strxangxl?cc=chaddharatandeepsingh2345@gmail.com",
    icon: FaEnvelope,
  },
];
