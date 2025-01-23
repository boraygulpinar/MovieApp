using DataAccess.Abstract;
using DataAccess.Repositories;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieRepository _movieRepository;

        public MovieController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> Get()
        {
            var movies = await _movieRepository.GetAllMovies();
            return Ok(movies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> Get(int id)
        {
            var movie = await _movieRepository.GetMovieByID(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        [HttpPost]
        public async Task<ActionResult<Movie>> Post(Movie movie)
        {
            if (movie == null)
            {
                return BadRequest();
            }
            await _movieRepository.AddMovie(movie);
            return CreatedAtAction("Post", new { id = movie.ID }, movie);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Movie movie)
        {
            if (id != movie.ID)
            {
                return BadRequest();
            }
            await _movieRepository.UpdateMovie(movie);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMovie(int id)
        {
            var movie = await _movieRepository.GetMovieByID(id);
            if (movie == null)
            {
                return NotFound($"Movie with ID {id} was not found.");
            }

            await _movieRepository.DeleteMovie(id);
            return NoContent();
        }
    }
}
