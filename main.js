// let div= document.getElementsByClassName("col")
// // const dav = document.querySelector("col");
// const dav = document.getElementsByClassName("col");

// // dav.onClick(target="window.location='#java.html'")

// div.onClick(target="window.location.href='https://www.facebook.com'");

// dav.addEventListener('click', function(){
//     window.location='https://www.facebook.com';
// });

document.getElementById('col1').addEventListener('click', function() {
    // Redirect to the desired URL
    window.location.href = 'java.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableDiv1 = document.getElementById('col1');
    const clickableDiv2 = document.getElementById('col2');
    const clickableDiv3 = document.getElementById('col3');
    const clickableDiv4 = document.getElementById('col4');
    //Sem 6
    const clickableDiv5 = document.getElementById('col5');
    const clickableDiv6 = document.getElementById('col6');
    const clickableDiv7 = document.getElementById('col7');
    const clickableDiv8 = document.getElementById('col8');
    const clickableDiv9 = document.getElementById('col9');

    clickableDiv1.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = './Sem5/java.html';
    });
    clickableDiv2.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = './Sem5/os.html';
    });
    clickableDiv3.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = './Sem5/r.html';
    });
    clickableDiv4.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location = './Sem5/practical.html';
    });
    
    clickableDiv5.addEventListener('click', function(){
        window.location = './Sem6/go.html'
    });

    clickableDiv6.addEventListener('click', function(){
        window.location = './Sem6/android.html'
    });

    clickableDiv7.addEventListener('click', function(){
        window.location = './Sem6/iot.html'
    });

    clickableDiv8.addEventListener('click', function(){
        window.location = './Sem6/practical.html'
    });

    clickableDiv9.addEventListener('click', function(){
        window.location = './Sem6/playground.html'
    });
});

// For the 2nd page
document.addEventListener('DOMContentLoaded', function(){
    const clickDiv1 = document.getElementById('ass1');
    const clickDiv2 = document.getElementById('ass2');
    const clickDiv3 = document.getElementById('ass3');

    clickDiv1.addEventListener('click',function(){
        var ele = clickDiv1.querySelector('a');
        window.location = ele.getAttribute("href");
    })
    clickDiv2.addEventListener('click',function(){
        var ele = clickDiv2.querySelector('a');
        window.location = ele.getAttribute("href");
    })
    clickDiv3.addEventListener('click',function(){
        var ele = clickDiv3.querySelector('a');
        window.location = ele.getAttribute("href");
    })
})