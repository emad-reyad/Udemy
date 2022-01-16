using Client.Domain;
using Microsoft.EntityFrameworkCore;

namespace Client.DataAccess
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; }

    }
}
