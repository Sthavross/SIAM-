
export function showMessage(message, type = "success"){
    Toastify({
        text: message,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "green" : "#ab2e46"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}