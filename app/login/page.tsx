import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions";

export default function LoginPage() {
  return (
    <form className="mx-auto mt-20 flex w-[400px]  flex-col justify-center gap-y-3 p-4">
      <Label htmlFor="email">Email:</Label>
      <Input id="email" name="email" type="email" required />
      <Label htmlFor="password">Mot de Passe:</Label>
      <Input id="password" name="password" type="password" required />
      <Button formAction={login}>Connexion</Button>
    </form>
  );
}
