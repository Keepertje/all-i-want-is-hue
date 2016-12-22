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

// Foscam xmas-hue-cam 

function reload() {
   setTimeout('reloadImg("xmasCam")',100)
};

function reloadImg(id) { 
   var obj = document.getElementById(id); 
   var date = new Date(); 
   obj.src = "http://xmascamurl.domain:port/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=XXXXXX&pwd=XXXXXXX&t=" + Math.floor(date.getTime()/100); 
} 