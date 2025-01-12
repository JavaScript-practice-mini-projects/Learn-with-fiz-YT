const copyButton = document.getElementById('copyBtn');
const pasteButton = document.getElementById('pasteBtn');
const cuteButton = document.getElementById('cuteBtn');

copyButton.addEventListener('click', () => {
    const copyValue = document.getElementById('copyIpt').value;
    navigator.clipboard.writeText(copyValue);
    alert(`copied: ${copyValue}`);
})

pasteButton.addEventListener('click', () => {
    document.getElementById('pasteIpt').value = '';
    const pasteInput = document.getElementById('pasteIpt');
    navigator.clipboard.readText()
    .then((text) => {
        pasteInput.value = text;
        alert(`Pasted: ${text}`)
    })
    .catch((err) => {
        console.error('Failed to paste text')
    })

})

cuteButton.addEventListener('click', () => {
    const cuteValue = document.getElementById('cuteIpt').value;
    navigator.clipboard.writeText(cuteValue)
    document.getElementById('cuteIpt').value = '';
    alert(`Cute: ${cuteValue}`);
})