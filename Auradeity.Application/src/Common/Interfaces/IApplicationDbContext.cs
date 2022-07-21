using Auradeity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auradeity.Application.Interfaces {

    public interface IApplicationDbContext {
        DbSet<AccountEntity> Accounts { get; set; }
    }

}