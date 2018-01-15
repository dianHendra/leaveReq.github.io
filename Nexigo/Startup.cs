using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Nexigo.Web.Extensions;
using Owin;

[assembly: OwinStartup(typeof(Nexigo.Startup))]

namespace Nexigo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCoreResources();
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
        }
    }
}
