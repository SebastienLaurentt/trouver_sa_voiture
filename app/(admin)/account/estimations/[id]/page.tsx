import { getEstimationById } from "@/lib/actions";

export default async function EstimationDetails({
  params,
}: {
  params: { id: string };
}) {
  const estimation = await getEstimationById(params.id);

  return (
    <div className="mx-auto max-w-7xl rounded-lg border border-white px-8 py-10">
      <h2 className="mb-4 text-2xl font-bold">Détails de l&apos;estimation</h2>
      <div className="space-y-6 rounded shadow-md">
        <div className="space-y-1.5">
          <span className="text-lg font-bold text-muted-foreground">
            Informations personnelles
          </span>
          <div className="space-y-1">
            <p>
              <strong>Prénom:</strong> {estimation.firstName}
            </p>
            <p>
              <strong>Nom:</strong> {estimation.lastName}
            </p>
            <p>
              <strong>Email:</strong> {estimation.email}
            </p>
            <p>
              <strong>Téléphone:</strong> {estimation.phone}
            </p>
            <p>
              <strong>Code postal:</strong> {estimation.postalCode}
            </p>
          </div>
        </div>
        <div className="space-y-1.5">
          <span className="text-lg font-bold text-muted-foreground">
            Informations du véhicule
          </span>
          <div className="space-y-1">
            <p>
              <strong>Marque:</strong> {estimation.brand}
            </p>
            <p>
              <strong>Modèle:</strong> {estimation.model}
            </p>
            <p>
              <strong>Type de carburant:</strong> {estimation.fuelType}
            </p>
            <p>
              <strong>Type de boîte:</strong> {estimation.boiteType}
            </p>
            <p>
              <strong>Kilométrage:</strong> {estimation.kmNumber}
            </p>
            <p>
              <strong>Immatriculation:</strong> {estimation.immatriculation}
            </p>
            <p>
              <strong>Période de vente:</strong> {estimation.sellingPeriod}
            </p>
            <p>
              <strong>Option d&apos;achat:</strong> {estimation.buyingOption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
