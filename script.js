const val=document.querySelectorAll(
    `.controls input`);

val.forEach(input=>input.addEventListener('change', handler))
val.forEach(input=>input.addEventListener('mousemove', handler))

function handler(){
    const suffix=this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}