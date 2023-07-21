function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP", "Python", "C++", "C#", "Java", "SQL", "Ruby"];
    var member = "C#";
    var memberIndex = skills.indexOf(member);
    if (memberIndex === -1) {
        console.log("Member not found");
    } else {
        console.log("Member found");
    }
}