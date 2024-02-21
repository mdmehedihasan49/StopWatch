
document.getElementById('start-btn').addEventListener('click', function (){
    let num = 0;
    const intervalid = setInterval(() => {
        document.getElementById('value').innerText= num++;
    }, 1000)

    document.getElementById('stop-btn').addEventListener('click', function (){
        clearInterval(intervalid);
    })
    document.getElementById('reset-btn').addEventListener('click', function (){
        location.reload();
    })
})

