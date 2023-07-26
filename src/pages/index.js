import MovieCarousel from '../components/MovieCarousel';
import axios from 'axios';

const API_KEY = '710df61fb41b93387fe400fe16b3d0c2';

const HomePage = ({ movies }) => {
  return (
    <div className='p-8'>
    <h1 className="text-4xl font-hj font-bold mb-6">Top-Rated Movies</h1>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (response.status === 200) {
      const topTenMovies = response.data.results.slice(0, 10);
      
      return {
        props: {
          movies: topTenMovies,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch movie data', error);
    return {
      props: {
        movies: [],
      },
    };
  }

  return {
    props: {
      movies: [],
    },
  };
}


export default HomePage;
