import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import logo_white from "../../assets/images/logo_white.svg";

function NavbarCustom() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Inicio", "Cursos", "Iniciar sesión", "Empieza ahora"];

  return (
    <Navbar
      isBlurred={true}
      className="fixed dark text-foreground"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* logo */}
          <img src={logo_white} alt="logo" className="w-16 p-4" />
          <p className="font-bold text-inherit">EduQuest</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          {/* logo */}
          <img src={logo_white} alt="logo" className="w-20 p-4" />
          <p className="font-bold text-inherit isotipo">EduQuest.com</p>
        </NavbarBrand>

        <NavbarItem isActive>
          <Link color="foreground">Inicio</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Cursos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Quiero ser tutor
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button color="white" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarCustom;
