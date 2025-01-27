using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public double Rating { get; set; }
        public string ImageURL { get; set; }
    }
}


/*
 * Entity propları tanımlandı
 * MovieContext yazıldı
 * Migration yapıldı.
 * IMovieRepository'de interface yazıldı
 * MovieRepository'de implementasyon yapıldı, veri tabanı kodları yazıldı
 * MovieController yazıldı, swaggerda test edildi
 */
