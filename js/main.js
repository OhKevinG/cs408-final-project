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
    xhr.open("PUT", "https://ii03ewr3r6.execute-api.us-east-2.amazonaws.com/item");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({
        "title": title,
        "director": director,
        "year": year,
        "rating": rating,
        "review": review
    }));
    form.reset();
}
