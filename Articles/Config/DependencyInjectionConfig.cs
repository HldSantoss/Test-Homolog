using Domain.Services;
using Services.Services;

namespace Api.Config
{
    public static class DependencyInjectionConfig
    {
        public static void ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped<IHTTPService, HTTPService>();
        }
    }
}
