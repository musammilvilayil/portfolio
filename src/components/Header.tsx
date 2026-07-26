import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navItems } from "../data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Muhammad Musammil home">
        MM<span>.</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-phone" href="tel:+916282135504">
        <Phone size={16} aria-hidden="true" />
        <span>+91 62821 35504</span>
      </a>
    </header>
  );
}
