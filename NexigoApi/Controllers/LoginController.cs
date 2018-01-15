using NexigoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NexigoApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private LeaveRequestDataContext context = null;
        public LoginController()
        {
            context = new LeaveRequestDataContext();
        }

        [HttpPost]
        public IHttpActionResult Log([FromBody]Employee req)
        {
            try
            {
                if (req != null)
                {
                    var result = string.Empty;
                    using (var dc = new LeaveRequestDataContext())
                    {
                        var user = dc.Employees.Where(p => p.ID == req.ID && p.Password == p.Password).SingleOrDefault();
                        if (user != null)
                        {
                            result = user.Name;
                        }
                        else
                        {
                            result = "Not Found";
                        }
                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}
