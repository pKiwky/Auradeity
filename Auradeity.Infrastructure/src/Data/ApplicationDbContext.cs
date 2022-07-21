using Microsoft.EntityFrameworkCore;

namespace Auradeity.Infrastructure.Data {

	public class ApplicationDbContext : DbContext {

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
	}

}
