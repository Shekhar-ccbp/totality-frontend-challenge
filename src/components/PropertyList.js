import {useState} from 'react'
import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    title: 'Property 1',
    description: 'Description 1',
    price: 100,
    image: 'image1.jpg',
  },
]

function PropertyList() {
  const [filter, setFilter] = useState('')

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search properties..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div>
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default PropertyList
