window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

document.getElementById("send-data").onclick = function () {
    const form = document.getElementById("submit-form");
    const title = form.title.value;
    const director = form.director.value;
    const year = form.year.value;
    const rating = form.rating.value;
    const review = form.review.value;
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://ii03ewr3r6.execute-api.us-east-2.amazonaws.com/items");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({
        "id": title,
        "director": director,
        "year": year,
        "rating": rating,
        "review": review
    }));
    form.reset();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log("Status:", xhr.status);
            console.log("Response:", xhr.responseText);
        }
    };
    
}

document.getElementById("load-data").onclick = function () {
    let lambda = document.getElementById("lambda-info");
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener("load", function () {
        const data = xhr.response;
        lambda.innerHTML =
            `<thead>
                <tr>
                    <th>TITLE</th>
                    <th>DIRECTOR</th>
                    <th>YEAR</th>
                    <th>RATING</th>
                    <th>REVIEW</th>
                </tr>
            </thead>
            <tbody>
            ${data.map((item, index) =>
                `<tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.director}</td>
                    <td>${item.year}</td>
                    <td>${item.rating}</td>
                    <td>${item.review}</td>
                </tr>`).join('')}
            </tbody>`;    
    });
    xhr.open("GET", "https://ii03ewr3r6.execute-api.us-east-2.amazonaws.com/items")
    xhr.send();
}
