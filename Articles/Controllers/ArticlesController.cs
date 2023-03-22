using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticleService _articlesService;

        public ArticlesController(IArticleService articlesService)
        {
            _articlesService = articlesService;
        }

        [HttpGet]
        public async Task<IActionResult> GetArticlesAsync()
        {
            try
            {
                var result = await _articlesService.GetAllArticlesAsync();

                return Ok(result.articles);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

      
    }
}
