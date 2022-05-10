let removeElementByQuerySelector = (selector) => {
    let element = document.querySelector(selector);
    typeof element == null ? null : element.remove();
}
