let n = prompt("Please enter number of prime numbers")

function is_prime(number) {
    if (number == 2) {
        return true
    }
    for (let d = 2; d <= Math.ceil(Math.sqrt(number)); d++) {
        if (number % d == 0) {
            return false
        }
    }
    return true
}
   

if (Number.isInteger(+n) && n > 0) {
    let primes = []
    for (let i = 2; primes.length < n; i++) {
        if (is_prime(i)) {
            primes.push(i)
        } 
    }
    alert(primes.join(' '))
}

