'use client'
import { LogoHome } from '../LogoHome'
import { NavigationHome } from '../NavigationHome'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function HeaderHome() {
  const [open, setOpen] = useState(false)
  return (
    <div className=" bg-red-600 px-12 py-5 text-white">
      <div className="container flex items-center justify-between">
        <LogoHome />
        <div>
          {!open ? (
            <button onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          ) : (
            <div className="flex gap-5">
              <NavigationHome />
              <button onClick={() => setOpen(!open)}>
                <Menu />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
