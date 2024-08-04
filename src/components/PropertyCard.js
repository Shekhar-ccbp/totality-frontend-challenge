function PropertyCard({property}) {
  return (
    <div>
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>${property.price}</p>
      <button type="button">Book Now</button>
    </div>
  )
}

export default PropertyCard
