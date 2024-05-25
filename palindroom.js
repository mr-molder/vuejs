let s = prompt("Enter ur string")
r_s = s.split('').reverse().join('')
if (s == r_s) {
    alert("YES")
} else {
    alert("NO")
}