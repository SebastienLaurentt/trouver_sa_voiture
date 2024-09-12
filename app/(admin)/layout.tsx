import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions";
import Link from "next/link";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full items-center justify-between px-2 py-4 text-white md:max-w-2xl lg:max-w-3xl  xl:max-w-5xl">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <form action={logout}>
          {" "}
          <Button variant="destructive">Déconnexion</Button>
        </form>
      </header>
      <div className="flex flex-1 flex-col justify-center">{children} </div>
    </div>
  );
}
