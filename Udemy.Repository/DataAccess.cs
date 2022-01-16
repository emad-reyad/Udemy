using Microsoft.EntityFrameworkCore;

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
    }
}