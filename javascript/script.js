
    function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    $(ev.currentTarget).removeClass('drag');

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
}

function leaveTile(ev) {
    ev.preventDefault();

    var target = ev.currentTarget;
    $(target).removeClass('drag');
}

function allowDrop(ev) {
    ev.preventDefault();
    var target = ev.currentTarget;
    $(target).addClass('drag');
}

console.log($('#slide'))

ColorPicker(
    $('#slide'),

    function (hex, hsv, rgb) {
        document.body.style.backgroundColor = hex;
    });
