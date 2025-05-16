function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    shimei = i.value;
    let aisastsu = 'こんにちは, '+shimei+'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisastsu;
}
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);