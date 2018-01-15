using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class ListLeaveRequestModel
    {
        public int ProcessId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int DaysLeave { get; set; }
        public string LeaveType { get; set; }
        public DateTime Submission { get; set; }
        public string status { get; set; }
        public string Email { get; set; }
        public string RecordId { get; set; }
    }
}