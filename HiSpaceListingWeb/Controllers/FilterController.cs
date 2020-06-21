using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HiSpaceListingModels;
using HiSpaceListingWeb.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HiSpaceListingWeb.Controllers
{
    public class FilterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
		public void SetSessionVariables()
		{
			#region
			User rs = HttpContext.Session.GetObjectFromJson<User>("_user");
			ViewBag.UserEmail = HttpContext.Session.GetString(Common.SessionUserEmail);
			ViewBag.UserId = HttpContext.Session.GetInt32(Common.SessionUserId);
			ViewBag.UserType = HttpContext.Session.GetInt32(Common.SessionUserType);
			ViewBag.UserCompanyName = HttpContext.Session.GetString(Common.SessionUserCompanyName);
			#endregion
		}

		public User GetSessionObject()
		{
			return HttpContext.Session.GetObjectFromJson<User>("_user");
		}
	}
}