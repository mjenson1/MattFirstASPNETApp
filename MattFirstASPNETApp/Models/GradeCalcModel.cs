using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MattFirstASPNETApp.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public double assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public double groupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public double quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public double exams { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public double intex { get; set; }

    }
}
