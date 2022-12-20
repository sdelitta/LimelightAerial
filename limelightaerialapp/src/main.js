let ready = (callback) => {
    // eslint-disable-next-line eqeqeq
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

setTimeout(function() {
	// eslint-disable-next-line no-undef
	$('#demo-modal').modal();
}, 500);