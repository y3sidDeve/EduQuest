import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { Link as RouterLink } from "react-router-dom";
import { Link as NextUILink } from "@nextui-org/react";

import logo_white from "../../assets/images/logo_white.svg";
import { ArrowLogIn } from "../../icons/Icons";

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
          <NextUILink color="foreground">Inicio</NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink color="foreground" href="#">
            Cursos
          </NextUILink>
        </NavbarItem>

        <NavbarItem>
          <RouterLink color="foreground" className=" hover:text-teal-500  transition-transform-colors" to="register-tutor/">
            Quiero ser tutor
          </RouterLink>
        </NavbarItem>

        <NavbarItem>
          <RouterLink to="login/">
            <Button color="white" variant="ghost">
              <ArrowLogIn />
              Iniciar sesión
            </Button>
          </RouterLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              className="w-full"
              color="foreground"
              href="#"
              size="lg"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarCustom;
