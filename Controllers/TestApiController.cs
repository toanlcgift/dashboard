using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SchoolDashboard.Controllers
{
    public class TestApiController : Controller
    {
        [Route("api/[controller]/index"), HttpPost]
        public IndexTable Get([FromForm] Meta meta)
        {
            List<IndexDatatable> list = new List<IndexDatatable>();
            for (int i = 0; i < 100; i++)
            {
                list.Add(new IndexDatatable()
                {
                    Time = "12/3/2018",
                    Type = "Sale",
                    From = "Cô giáo " + i,
                    To = "123456789",
                    Detail = "Khóa học cho bé 3 tuổi",
                    RecordID = i
                });
            }
            var response = new IndexTable()
            {
                meta = new Meta() { page = 1, pages = 10, perpage = -1, total = 100, sort = "asc", field = "RecordId" },
                data = list
            };
            return response;
        }

        [Route("api/[controller]/teacher"), HttpPost]
        public TeacherTable GetTeachers([FromForm] Meta meta)
        {
            List<Teacher> list = new List<Teacher>();
            for (int i = 0; i < 100; i++)
            {
                list.Add(new Teacher()
                {
                    Name = "Cô giáo " + i,
                    Address = "địa chỉ",
                    Classes = "danh sách lớp",
                    RecordID = i,
                    Regcourse = "123",
                    Workplace = "Hà Nội"

                });
            }
            var response = new TeacherTable()
            {
                meta = new Meta() { page = 1, pages = 10, perpage = -1, total = 100, sort = "asc", field = "RecordId" },
                data = list
            };
            return response;
        }

        [Route("api/[controller]/branch"), HttpPost]
        public BranchTable GetBranchs([FromForm] Meta meta)
        {
            List<Branch> list = new List<Branch>();
            for (int i = 0; i < 100; i++)
            {
                list.Add(new Branch()
                {
                    Name = "Chi nhánh " + i,
                    Address = "địa chỉ",
                    Createdate = "1/1/2018",
                    RecordID = i,
                    Hotline = "123456789",
                    Studentcount = "69"

                });
            }
            var response = new BranchTable()
            {
                meta = new Meta() { page = 1, pages = 10, perpage = -1, total = 100, sort = "asc", field = "RecordId" },
                data = list
            };
            return response;
        }
    }

    public class IndexTable
    {
        public Meta meta { get; set; }
        public List<IndexDatatable> data { get; set; }
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

    public class IndexDatatable
    {
        public int RecordID { get; set; }
        public string Time { get; set; }
        public string Type { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Detail { get; set; }
    }

    public class Teacher
    {
        public int RecordID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Regcourse { get; set; }
        public string Workplace { get; set; }
        public string Classes { get; set; }
    }

    public class TeacherTable
    {
        public Meta meta { get; set; }
        public List<Teacher> data { get; set; }
    }

    public class Branch {
        public int RecordID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Createdate { get; set; }
        public string Hotline { get; set; }
        public string Studentcount { get; set; }
    }
    public class BranchTable
    {
        public Meta meta { get; set; }
        public List<Branch> data { get; set; }
    }

}