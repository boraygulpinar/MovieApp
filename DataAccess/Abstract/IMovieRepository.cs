using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IMovieRepository
    {
        Task<List<Movie>> GetAllMovies();
        Task<Movie> GetMovieByID(int id);
        Task AddMovie(Movie movie);
        Task DeleteMovie(int id);
        Task UpdateMovie(Movie movie);
    }
}
