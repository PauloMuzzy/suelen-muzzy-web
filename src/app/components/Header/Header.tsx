'use client'

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import Image from 'next/image'

import { useState } from 'react'
import logo from '../../../../public/assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Início', 'Sobre mim', 'Serviços', 'Contatos']
  return (
    <Navbar className="bg-transparent bg-tertiary" isMenuOpen={isMenuOpen}>
      <NavbarContent className="" justify="center">
        <NavbarBrand>
          <Image src={logo} width={150} alt="Picture of the author" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>
      <NavbarMenu className="opacity-95">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="flex w-full justify-end"
              color="foreground"
              href="#"
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
