if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
    .then(() => {
        console.log("serviceWorker installed Successfully");
    })
    .catch(() => {
        console.log("Error");
    })
} 