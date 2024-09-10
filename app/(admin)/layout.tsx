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
      <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
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
