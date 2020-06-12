using HiSpaceListingModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiSpaceListingWeb.ViewModel
{
	public class ListingImageViewModel
	{
		//public ListingImageViewModel()
		//{
		//	ListingImages = new ListingImages();
		//}

		//public ListingImages ListingImages { get; set; }
		public int ListingImagesId { set; get; }
		public int ListingId { get; set; }
		public string Name { get; set; }
		public string ImageUrl { get; set; }
		public bool Status { get; set; }
		public IFormFile File_Image { set; get; }
	}
}
