using Auradeity.Application.Contracts;
using Auradeity.Application.Interfaces;
using Auradeity.Domain.Models.Request;

namespace Auradeity.Application.Handlers {

    public class AuthenticationCommand : IAuthenticationCommand {
        private readonly IApplicationDbContext _applicationDbContext;

        public AuthenticationCommand(IApplicationDbContext applicationDbContext) {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<string> Register(RequestRegisterModel requestRegisterModel) {
            return "";
        }
    }

}