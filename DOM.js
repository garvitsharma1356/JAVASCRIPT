
//by .textcontent
const desc = document.getElementById('description');
console.log(desc.textContent);

desc.textContent = "roger that";

//by .innerHTML

desc.innerHTML = "Updated features: <strong>Active Noise Cancelling</strong> and <em>Bluetooth 5.0</em>.";
// desc.innerHTML = "Updated features: <strong>Active Noise Cancelling</strong> and <em>Bluetooth 5.0</em>.";


let userInput = `<img src ="x" onerror = "alert('hacker are coming at your home by system')">`;
desc.innerHTML = userInput ;