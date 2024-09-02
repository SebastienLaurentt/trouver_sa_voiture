import { getVehiclesList } from '@/lib/actions';
import React from 'react'
import VehiculeList from './VehiculeList';

const Page = async () => {
  const vehicles = await getVehiclesList();
  return (
    <div>
      <VehiculeList vehicles={vehicles} />
    </div>
  )
}

export default Page