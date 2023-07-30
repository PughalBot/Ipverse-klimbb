const MovieCard = ({ movie }) => {
  return (
    <div className= 'flex flex-col items-center' style={{
      minWidth: '240px',  // minimum width for smaller screens
      maxWidth: '96%', // maximum width for larger screens
      height: '500px',
      border: '2px solid #FF0000',
      borderRadius: '1rem',
      padding: '1rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-between'
    }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: '150px',
          height: 'auto',
          borderRadius: '1rem',
          objectFit: 'center'
        }}
      />
      <h3 className="font-pp" style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>{movie.title}</h3>
      <p className="font-ri" style={{
        fontSize: '.75rem',
        marginTop: '1rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>{movie.overview}</p>

<style jsx>{`
        @media only screen and (max-width: 768px) {
          /* Add styles specific to tablet-size screens here */
          max-width: 80%;
          margin: 0 auto;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          /* Add styles specific to larger tablet-size screens here */
          max-width: 60%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default MovieCard;
