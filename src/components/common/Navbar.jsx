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
      isBlurred={false}
      className="fixed bg-transparent text-white dark"
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
          <Link color="foreground" isActive>
            Inicio
          </Link>
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
          <Button color="danger">Empieza ahora</Button>
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
