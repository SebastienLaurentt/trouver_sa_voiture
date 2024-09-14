import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <PageHeader
        title="Besoin d'informations supplémentaires ?"
        description="Remplissez le formulaire et nous vous répondrons rapidement pour répondre à votre demande."
      />
      <Section marginBottom classname="mt-8">
        <div className="mx-auto space-y-4 rounded-xl border p-6 shadow shadow-slate-800 xl:w-[800px] xl:p-8">
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <div className="md:w-1/2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input id="firstname" placeholder="Votre Prénom" />
            </div>
            <div className="md:w-1/2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" placeholder="Votre Nom" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="Votre Email" />
          </div>
          <div>
            <Label htmlFor="object">Object</Label>
            <Input id="object" placeholder="Object de votre demande" />
          </div>
          <div>
            <Label htmlFor="message">Description</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Description de votre demande"
            />
          </div>
          <Button className="gap-x-2">
            Envoyer <Mail size={16}/>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
