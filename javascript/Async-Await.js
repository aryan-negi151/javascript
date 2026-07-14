function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function displayData() {
    const data = await getData();
    console.log(data);
}

displayData();