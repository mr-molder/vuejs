let number=prompt("Please enter number of month")

let month_list = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

if (Number.isInteger(+number) && number >= 1 && number <= 12) {
    alert(month_list[number - 1])
}
else {
    alert("Некорректный номер месяца")
}