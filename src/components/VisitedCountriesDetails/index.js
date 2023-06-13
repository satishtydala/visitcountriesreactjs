import './index.css'

const VisitedCountriesDetails = props => {
  const {eachCountry, onClickRemoveCountry} = props
  const {name, imageUrl, id} = eachCountry

  const onClickRemove = () => {
    onClickRemoveCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="thumbnail-image" />
      <div className="name-button-details">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountriesDetails
