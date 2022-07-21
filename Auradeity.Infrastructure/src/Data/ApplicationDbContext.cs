using Auradeity.Application.Interfaces;
using Auradeity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auradeity.Infrastructure.Data {

    public class ApplicationDbContext : DbContext, IApplicationDbContext {
        public DbSet<AccountEntity> Accounts { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }

}