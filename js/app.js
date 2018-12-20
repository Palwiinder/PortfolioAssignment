if(navigator.serviceWorker) {
    navigator.serviceWorker.register('../sw.js')
    .then(() => {
        console.log("installed");
    })
    .catch(() => {
        console.log("Error");
    })
} 