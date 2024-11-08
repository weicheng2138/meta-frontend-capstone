import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { SITE_MENU } from "../constants";
import logoWhite from "../assets/logo-white.png";
import {
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";
function Footer() {
  return (
    <footer
      className={cn(
        "w-full max-w-[640px] mx-4 my-12 grid grid-cols-2 gap-4 text-white",
        "sm:grid-cols-9",
      )}
    >
      <img
        src={logoWhite}
        alt="logo-white"
        className={cn(
          "h-40 col-span-1 justify-self-start p-2",
          "sm:col-span-2 sm:h-full sm:justify-self-center",
        )}
      />
      <div className={cn("flex flex-col gap-1 col-span-1", "sm:col-span-2")}>
        <h3 className="font-bold mb-1">Navigation</h3>
        {SITE_MENU.map((item) => {
          return (
            <Link key={item.link} to={item.link} className="block">
              <span className="hover:text-lemon transition-colors">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className={cn("flex flex-col gap-2 col-span-1", "sm:col-span-3")}>
        <h3 className="font-bold">Contact</h3>
        <p className="flex gap-2">
          <MapPin className="inline" />
          <span className="inline">983 Xxx Ave, Axx</span>
        </p>
        <p className="flex gap-2">
          <Phone className="inline" />
          <span className="inline">000-xxx-xxx</span>
        </p>
        <p className="flex gap-2">
          <Mail className="inline" />
          <span className="inline">xxxx@xxxxx.xxx</span>
        </p>
      </div>
      <div className={cn("flex flex-col gap-2 col-span-1", "sm:col-span-2")}>
        <h3 className="font-bold">Social Media</h3>
        <div className="flex gap-2">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-lemon transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-lemon transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-lemon transition-colors"
          >
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
