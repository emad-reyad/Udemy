using Microsoft.EntityFrameworkCore;
using Udemy.Domain;

namespace Udemy.Repository
{
    public class DataAccess:DbContext
    {
        public DataAccess()
        {

        }
        public DataAccess(DbContextOptions options):base(options)
        {

        }
        public DbSet<Customer> Csutomers { get; set; }
    }
}