export default function Entry({ entry }) {
  return (
    <article className="journal-entry">
      <div className="journal-image-container">
        <img src={entry.img.src} alt={entry.img.alt} />
      </div>
      <div className="journal-text">
        <span className="city-name">{entry.country}</span>
        <a href={entry.googleMap}>View on Google Maps</a>

        <h2>{entry.title}</h2>
        <p className="journal-date">{entry.dates}</p>
        <p className="journal-facts">{entry.text}</p>
      </div>
    </article>
  );
}
