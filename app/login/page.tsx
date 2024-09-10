import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col-reverse justify-center items-center text-white md:flex-col xl:mx-16 xl:flex-row xl:gap-x-8 2xl:mx-auto 2xl:max-w-[1600px]">
      <div className="mt-4 flex w-full flex-col items-center text-foreground md:mb-4 md:mt-0 xl:mb-0 xl:w-1/2 xl:items-start ">
        <div className="w-[300px] md:w-[400px]">
          <div className="mb-6 flex flex-col gap-y-2 text-center xl:text-left">
            <span className="text-lg font-bold lg:text-2xl ">
              Connexion Administrateur
            </span>
          </div>
          <form className="mx-auto  flex  flex-col justify-center gap-y-3">
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" type="email" required />
            <Label htmlFor="password">Mot de Passe:</Label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={login}>Connexion</Button>
            <Link href="/" className="flex flex-row items-center gap-x-1 hover:font-bold">
              <ArrowLeftToLine size={20} /> Retour site
            </Link>
          </form>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/HeroImg.jpg"
          alt="Image de voiture"
          className="lg:rounded-lg"
        />
      </div>
    </div>
  );
}
