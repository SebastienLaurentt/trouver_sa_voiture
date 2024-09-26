import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <PageHeader
        title="Besoin d'informations supplémentaires ?"
        description="Remplissez le formulaire et nous vous répondrons rapidement pour répondre à votre demande."
      />
      <Section classname="my-16 ">
        <div className="space-y-4 rounded-xl border p-6 shadow shadow-slate-800 md:mx-20  xl:p-8">
          <div className="flex flex-col  gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
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
            Envoyer ma demande <Send size={18} />
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
