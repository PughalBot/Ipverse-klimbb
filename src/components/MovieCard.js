const MovieCard = ({ movie }) => {
  return (
    <div className= 'flex flex-col items-center' style={{
      minWidth: '260px', // minimum width for smaller screens
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
    </div>
  );
};

export default MovieCard;
