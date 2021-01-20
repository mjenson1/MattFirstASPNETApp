var submit = document.getElementById("submitButton")

submit.addEventListener("click", function () {
    var assignmentpct = 0.5
    var groupProjectpct = 0.1
    var quizzespct = 0.1
    var examspct = 0.2
    var intexpct = 0.1

    var assignments = document.getElementById("assignment").value
    var groupProjects = document.getElementById("groupProject").value
    var quizzes = document.getElementById("quizzes").value
    var exams = document.getElementById("exams").value
    var intex = document.getElementById("intex").value

    var points = (assignmentpct * assignments) + (groupProjectpct * groupProjects) + (quizzes * quizzespct) + (examspct * exams) + (intexpct * intex)

    if (points >= 94) {
        alert("Your percent is " + points + "% and Your letter grade is an A !");
    }
    if (points < 94 && points >= 90) {
        alert("Your percent is " + points + "% and Your letter grade is a A- !");
    }
    if (points < 90 && points >= 87) {
        alert("Your percent is " + points + "% and Your letter grade is a B+ !");
    }
    if (points < 87 && points >= 84) {
        alert("Your percent is " + points + "% and Your letter grade is a B !");
    }
    if (points < 84 && points >= 80) {
        alert("Your percent is " + points + "% and Your letter grade is an B- !");
    }
    if (points < 80 && points >= 77) {
        alert("Your percent is " + points + "% and Your letter grade is an C+ !");
    }
    if (points < 77 && points >= 74) {
        alert("Your percent is " + points + "% and Your letter grade is a C !");
    }
    if (points < 74 && points >= 70) {
        alert("Your percent is " + points + "% and Your letter grade is a C- !");
    }
    if (points < 70 && points >= 67) {
        alert("Your percent is " + points + "% and Your letter grade is a D+ !");
    }
    if (points < 67 && points >= 64) {
        alert("Your percent is " + points + "% and Your letter grade is an D !");
    }
    if (points < 64 && points >= 60) {
        alert("Your percent is " + points + "% and Your letter grade is an D- !");
    }
    if (points < 60) {
        alert("Your percent is " + points + "% and Your letter grade is an E !");
    }

});