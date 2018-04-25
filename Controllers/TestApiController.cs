using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SchoolDashboard.Controllers
{
    public class TestApiController : Controller
    {
        [Route("api/[controller]"), HttpPost]
        public Rootobject Get([FromForm] Meta meta)
        {
            List<Datum> list = new List<Datum>();
            for(int i = 0; i < 100; i++)
            {
                list.Add(new Datum()
                {
                    Time = "12/3/2018",
                    Type = "Sale",
                    From = "Cô giáo "+(++i),
                    To = "123456789",
                    Detail = "Khóa học cho bé 3 tuổi"
                });
            }
            var response = new Rootobject()
            {
                meta = new Meta() { page = 1, pages = 10, perpage = -1, total = 100, sort = "asc", field = "RecordId" },
                data = list
            };
            return response;
        }
    }

    public class Rootobject
    {
        public Meta meta { get; set; }
        public List<Datum> data { get; set; }
    }

    public class Meta
    {
        public int page { get; set; }
        public int pages { get; set; }
        public int perpage { get; set; }
        public int total { get; set; }
        public string sort { get; set; }
        public string field { get; set; }
    }

    public class Datum
    {
        public int RecordID { get; set; }
        public string Time { get; set; }
        public string Type { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Detail { get; set; }
    }

}