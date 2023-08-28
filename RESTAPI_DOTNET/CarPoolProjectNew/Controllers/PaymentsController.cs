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
    public class PaymentsController : ControllerBase
    {
        private readonly CarpoolprojectContext _context;

        public PaymentsController(CarpoolprojectContext context)
        {
            _context = context;
        }


        // GET: api/Payments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetAllPayments()
        {
          if (_context.Payments == null)
          {
              return NotFound();
          }
            return await _context.Payments.ToListAsync();
        }

        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
          if (_context.Payments == null)
          {
              return NotFound();
          }
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }

        // PUT: api/Payments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            if (id != payment.Id)
            {
                return BadRequest();
            }

            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }*/

        // POST: api/Payments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
      /*  [HttpPost]
        public async Task<ActionResult<Payment>> PostPayment(Payment payment)
        {
          if (_context.Payments == null)
          {
              return Problem("Entity set 'CarpoolprojectContext.Payments'  is null.");
          }
            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPayment", new { id = payment.Id }, payment);
        }
        */
        
        // DELETE: api/Payments/5
        /*[HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            if (_context.Payments == null)
            {
                return NotFound();
            }
            var payment = await _context.Payments.FindAsync(id);
            if (payment == null)
            {
                return NotFound();
            }

            _context.Payments.Remove(payment);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        */
        private bool PaymentExists(int id)
        {
            return (_context.Payments?.Any(e => e.Id == id)).GetValueOrDefault();
        }



        CarpoolprojectContext cp=new CarpoolprojectContext();
        [HttpGet("/byStatus")]
        public async Task<List<Payment>> getAllPayments(string status)

        {
            List<Payment> pay = new List<Payment>();
            pay=await (from AllPayments in cp.Payments where(AllPayments.Status==status) select AllPayments).ToListAsync();

            return pay;
        }
    }
}
