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
    public class ApproverController : ApiController
    {
        private LeaveRequestDataContext context = null;
        public ApproverController()
        {
            context = new LeaveRequestDataContext();
        }

    }
}
