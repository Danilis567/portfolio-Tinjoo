import { MdAlternateEmail } from "react-icons/md";
import { FiInstagram, FiGithub, FiFigma } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

export const path = [
    {
        name_tr: "Anasayfa",
        name_eng: "Home",
        path: "",
        id: uuidv4(),
    },
    {
        name_tr: "Çalışmalarım",
        name_eng: "Works",
        path: "works",
        id: uuidv4(),
    },
    {
        name_tr: "Blog",
        name_eng: "Blog",
        path: "blog",
        id: uuidv4(),
    },
    {
        name_tr: "İletişim",
        name_eng: "Contact",
        path: "contact",
        id: uuidv4(),
    },
];

export const footerIcons = [
    {
        icons: MdAlternateEmail,
        id: uuidv4(),
    },
    {
        icons: FiInstagram,
        id: uuidv4(),
    },
    {
        icons: BsLinkedin,
        id: uuidv4(),
    },
    {
        icons: FiGithub,
        id: uuidv4(),
    },
    {
        icons: FiFigma,
        id: uuidv4(),
    },
];