import { nanoid } from "nanoid";
import deepEarthImg from "./assets/desktop/image-deep-earth.jpg";
import nightArcadeImg from "./assets/desktop/image-night-arcade.jpg";
import soccerTeamImg from "./assets/desktop/image-soccer-team.jpg";
import gridImg from "./assets/desktop/image-grid.jpg";
import fromAboveImg from "./assets/desktop/image-from-above.jpg";
import borealisImg from "./assets/desktop/image-pocket-borealis.jpg";
import curiosityImg from "./assets/desktop/image-curiosity.jpg";
import fishEyeImg from "./assets/desktop/image-fisheye.jpg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const navLinks = [
  { id: nanoid(), link: "about" },
  { id: nanoid(), link: "careers" },
  { id: nanoid(), link: "events" },
  { id: nanoid(), link: "products" },
  { id: nanoid(), link: "support" },
];

const socialLinks = [
  { id: nanoid(), icon: <AiFillFacebook /> },
  { id: nanoid(), icon: <AiOutlineTwitter /> },
  { id: nanoid(), icon: <BsPinterest /> },
  { id: nanoid(), icon: <AiOutlineInstagram /> },
];
const creations = [
  { id: nanoid(), image: deepEarthImg, text: "deep earth" },
  { id: nanoid(), image: nightArcadeImg, text: "night arcade" },
  { id: nanoid(), image: soccerTeamImg, text: "soccer team vr" },
  { id: nanoid(), image: gridImg, text: "the grid" },
  { id: nanoid(), image: fromAboveImg, text: "from up above vr" },
  { id: nanoid(), image: borealisImg, text: "pocket borealis" },
  { id: nanoid(), image: curiosityImg, text: "the curiosity" },
  { id: nanoid(), image: fishEyeImg, text: "make it fish eye" },
];

export { navLinks, socialLinks, creations };
