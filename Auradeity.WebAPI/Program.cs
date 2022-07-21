using Auradeity.Application.Contracts;
using Auradeity.Application.Handlers;
using Auradeity.Application.Interfaces;
using Auradeity.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// WebAPI
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Application
builder.Services.AddScoped<IAuthenticationCommand, AuthenticationCommand>();
builder.Services.AddScoped<IAuthenticationQuery, AuthenticationQuery>();

// Infrastructure
builder.Services.AddScoped<IApplicationDbContext, ApplicationDbContext>();

var app = builder.Build();

if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();