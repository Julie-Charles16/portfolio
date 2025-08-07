import Navbar from './navbar'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[110px] px-4 overflow-x-hidden">{children}</main>
    </>
  )
}
