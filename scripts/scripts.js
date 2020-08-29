$('#btnMuebles').click(e => {
    e.preventDefault();
    $('#seccionMuebles').addClass("show active");
    $('#seccionPortones').removeClass("show active");
});

$('#btnPortones').click(e => {
    e.preventDefault();
    $('#seccionPortones').addClass("show active");
    $('#seccionMuebles').removeClass("show active");
});