using System;
using Microsoft.AspNet.Mvc;

namespace testNgWidgets.Controllers.Web
{
   public class AppController : Controller
   {
      public IActionResult Index()
      {
         return View();
      }

      public IActionResult ngWidgets()
      {
         return View();
      }

      public IActionResult jqWidgets()
      {
         return View();
      }
   }
}