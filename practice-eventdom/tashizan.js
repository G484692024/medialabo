function greeting() {
    let i = document.querySelector('input[name="left"]');
    let j = document.querySelector('input[name="right"]');
    left = i.value;
    right = j.value;
    let l = Number(left);
    let r = Number(right);
    let wa = l+r;
    let p = document.querySelector('span#answer');
    p.textContent = wa;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);