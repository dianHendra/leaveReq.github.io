using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;

namespace NexigoApi.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class ExampleController : ApiController
  {
    [HttpGet]
    public string GetText()
    {
      return "Only text";
      //return GetNumber().ToString();
    }

    [HttpGet]
    public int GetNumber()
    {
      return 55555;
    }

    [HttpPost]
    public GridModel GetGridData()
    {
      Customer c1 = new Customer
      {
        Name = "Nama1",
        Address = "Alamat1"
      };
      Customer c2 = new Customer
      {
        Name = "Nama 2",
        Address = "Alamat 2"
      };
      List<Customer> listC = new List<Customer>();
      listC.Add(c1);
      listC.Add(c2);

      GridModel gridData = new GridModel
      {
        data = listC,
        total = 2
      };

      return gridData;
    }

    [HttpPost]
    public List<SelectModel> GetDropdownList()
    {
      var select1 = new SelectModel
      {
        value = "nilai 1",
        text = "tulisan 1"
      };
      var select2 = new SelectModel
      {
        value = "nilai 2",
        text = "tulisan 2"
      };
      var ddlList = new List<SelectModel>();
      ddlList.Add(select1);
      ddlList.Add(select2);

      return ddlList;
    }
  }
}
