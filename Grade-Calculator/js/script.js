function calculateGrade() {

    let sub1 = Number(prompt("Enter marks for Subject 1 (0-100):"));
    let sub2 = Number(prompt("Enter marks for Subject 2 (0-100):"));
    let sub3 = Number(prompt("Enter marks for Subject 3 (0-100):"));
    let sub4 = Number(prompt("Enter marks for Subject 4 (0-100):"));
    let sub5 = Number(prompt("Enter marks for Subject 5 (0-100):"));

    // Validate marks
    if (
        sub1 < 0 || sub1 > 100 ||
        sub2 < 0 || sub2 > 100 ||
        sub3 < 0 || sub3 > 100 ||
        sub4 < 0 || sub4 > 100 ||
        sub5 < 0 || sub5 > 100
    ) {
        alert("Invalid input! Please enter marks between 0 and 100.");
        return;
    }

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(
        `Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`
    );

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <p>Total Marks: ${total}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
    `;
}