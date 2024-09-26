"use client"

import { Button } from '@/components/ui/button'
import { logout } from '@/lib/actions'
import { ArrowLeftToLine, CarFront, Power, TrendingUpDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AccountHeader = () => {
  const pathname = usePathname()

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href
    return (
      <Button 
        asChild 
        variant="outline" 
        className={`flex flex-row items-center gap-x-2 hover:bg-secondary hover:text-black ${
          isActive ? 'bg-secondary text-black' : ''
        }`}
      >
        <Link href={href}>
          {children}
        </Link>
      </Button>
    )
  }

  return (
    <nav className="w-[250px] rounded-lg border border-white px-8 py-10">
      <div className="flex h-[400px] flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <NavLink href="/account/vehicules">
            Vehicules <CarFront size={18} />
          </NavLink>
          <NavLink href="/account/estimations">
            Estimations <TrendingUpDown size={18} />
          </NavLink>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button asChild>
            <Link href="/" className="flex flex-row items-center gap-x-2">
              Retour Site <ArrowLeftToLine size={18} />
            </Link>
          </Button>
          <form action={logout}>
            {" "}
            <Button
              variant="destructive"
              className="flex w-full flex-row items-center gap-x-2"
            >
              Déconnexion
              <Power size={18} />
            </Button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default AccountHeader