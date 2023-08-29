using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarPoolProjectNew.Models;

namespace CarPoolProjectNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengersReviewsController : ControllerBase
    {
        private readonly CarpoolprojectContext _context;

        public PassengersReviewsController(CarpoolprojectContext context)
        {
            _context = context;
        }

        // GET: api/PassengersReviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassengersReview>>> GetPassengersReviews()
        {
          if (_context.PassengersReviews == null)
          {
              return NotFound();
          }
            return await _context.PassengersReviews.ToListAsync();
        }

        // GET: api/PassengersReviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassengersReview>> GetPassengersReview(int id)
        {
          if (_context.PassengersReviews == null)
          {
              return NotFound();
          }
            var passengersReview = await _context.PassengersReviews.FindAsync(id);

            if (passengersReview == null)
            {
                return NotFound();
            }

            return passengersReview;
        }

        // PUT: api/PassengersReviews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassengersReview(int id, PassengersReview passengersReview)
        {
            if (id != passengersReview.Id)
            {
                return BadRequest();
            }

            _context.Entry(passengersReview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassengersReviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PassengersReviews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassengersReview>> PostPassengersReview(PassengersReview passengersReview)
        {
          if (_context.PassengersReviews == null)
          {
              return Problem("Entity set 'CarpoolprojectContext.PassengersReviews'  is null.");
          }
            _context.PassengersReviews.Add(passengersReview);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassengersReview", new { id = passengersReview.Id }, passengersReview);
        }

        // DELETE: api/PassengersReviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassengersReview(int id)
        {
            if (_context.PassengersReviews == null)
            {
                return NotFound();
            }
            var passengersReview = await _context.PassengersReviews.FindAsync(id);
            if (passengersReview == null)
            {
                return NotFound();
            }

            _context.PassengersReviews.Remove(passengersReview);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassengersReviewExists(int id)
        {
            return (_context.PassengersReviews?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
