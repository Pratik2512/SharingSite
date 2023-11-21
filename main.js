// let div= document.getElementsByClassName("col")
// // const dav = document.querySelector("col");
// const dav = document.getElementsByClassName("col");

// // dav.onClick(target="window.location='#java.html'")

// div.onClick(target="window.location.href='https://www.facebook.com'");

// dav.addEventListener('click', function(){
//     window.location='https://www.facebook.com';
// });

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv1 = document.getElementById('col1');
    const clickableDiv2 = document.getElementById('col2');
    const clickableDiv3 = document.getElementById('col3');
    const clickableDiv4 = document.getElementById('col4');

    clickableDiv1.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = 'java.html';
    });
    clickableDiv2.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = 'os.html';
    });
    clickableDiv3.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = 'r.html';
    });
    clickableDiv4.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = 'practical.html';
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const clickDiv1 = document.getElementById('ass1');
    const clickDiv2 = document.getElementById('ass2');
    const clickDiv3 = document.getElementById('ass3');

    clickDiv1.addEventListener('click',function(){
        window.location = 'Java/ass1.html';
    })
    clickDiv2.addEventListener('click',function(){
        window.location = 'Java/ass1.html';
    })
    clickDiv3.addEventListener('click',function(){
        window.location.href = 'https://www.notion.so/Assignment-3-2c2070621f07467e80987be577283804?pvs=4';
    })
})