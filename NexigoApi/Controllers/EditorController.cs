using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NexigoApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EditorController : ApiController
    {
        // GET api/<controller>
        public string Get()
        {
//            if (File.Exists("..\\..\\"))
//            {
//                return 
//            }
            return "Not exist";
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value: " + id;
        }

        // POST api/<controller>
        [HttpPost]
        public dynamic Post([FromBody]dynamic value)
        {
            //return value.filename;
            return value;
    }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
          //return value + "to " + id;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}