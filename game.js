var topup, downup, leftup, rightup, m, n, please, z, solution, z1, t, m1, n1, s1, s2, s3, s4, z2, t2, r1, r2, r3, r4, put, put1, l3;
var c = 1;
var l = 1;
var d = 0;
var l1 = 1;
var l2 = 1;
var place = [];
var place1 = [];
var place2 = [];
var place3 = [];
var x, y;
var k = 20;
var i = 20;
food();
common1(4);
function keypress(event) {
    t = event.which;
    if (t == 38) { common1(1); }
    else if (t == 40) { common1(2); }
    else if (t == 37) { common1(3); }
    else if (t == 39) { common1(4); }
    else if (t == 32) { stop(); }
}
function common1(j) {
    if (j == 1) {
        clearInterval(please);
        clearInterval(rightup);
        clearInterval(downup);
        clearInterval(leftup);
        clearInterval(topup);
        topup = setInterval(topit, 10);
    }
    else if (j == 2) {
        clearInterval(please);
        clearInterval(rightup);
        clearInterval(downup);
        clearInterval(leftup);
        clearInterval(topup);
        downup = setInterval(downit, 10);
    }
    else if (j == 3) {
        clearInterval(please);
        clearInterval(rightup);
        clearInterval(downup);
        clearInterval(leftup);
        clearInterval(topup);
        leftup = setInterval(leftit, 10);
    }
    else if (j == 4) {
        clearInterval(please);
        clearInterval(rightup);
        clearInterval(downup);
        clearInterval(leftup);
        clearInterval(topup);
        rightup = setInterval(rightit, 10);
    }
}
function rightit() {
    if (i < 380) {
        if (r2 != 1) {
            r1 = 1;
            r3 = 0;
            r4 = 0;
            s1 = 1;
            if ((s2 == 1) && (c > 2)) {
                s1 = 1;
                if (l >= c) { l = 1; }
                else { }
                clearInterval(rightup);
                please = setInterval(real, 100, t);
            }

            else {
                var move = document.getElementsByClassName("go");
                for (h = 0; h < c; h++) {
                    move[h].style.left = i - (h * 20);
                    move[h].style.top = k;
                }
                i++;
                var letssee = document.getElementById("prob1");
                letssee.innerHTML = "i=" + i;
                var letssee1 = document.getElementById("prob2");
                letssee1.innerHTML = "k=" + k;
                put = document.getElementById("prob3");
                put1 = document.getElementById("prob4");
                put.innerHTML = "s1=" + s1;
                put1.innerHTML = "s2=" + s2;
                var put2 = document.getElementById("prob5");
                var put3 = document.getElementById("prob6");
                put2.innerHTML = "m1=" + m1;
                put3.innerHTML = "n1=" + n1;

                if (((i >= y) && (i <= (y + 20))) || (((i + 20) >= y) && ((i + 20) <= (y + 20)))) {
                    meeting();
                }
                else { }
            }
        }
        else {
            t = 37;
            common1(3);
        }
    }
    else {
        killer();
    }
}
function downit() {
    if (k < 380) {
        if (r3 != 1) {
            r1 = 0;
            r2 = 0;
            r4 = 1;
            s2 = 1;
            if ((s1 == 1) && (c > 2)) {
                s2 = 1;
                if (l >= c) { l = 1; }
                else { }
                clearInterval(downup);
                please = setInterval(real, 100, t);
            }
            else {
                var move1 = document.getElementsByClassName("go");
                for (h = 0; h < c; h++) {
                    move1[h].style.top = k - (h * 20);
                    move1[h].style.left = i;
                }
                k++;
                var letssee = document.getElementById("prob1");
                letssee.innerHTML = "i=" + i;
                var letssee1 = document.getElementById("prob2");
                letssee1.innerHTML = "k=" + k;
                put = document.getElementById("prob3");
                put1 = document.getElementById("prob4");
                put.innerHTML = "s1=" + s1;
                put1.innerHTML = "s2=" + s2;
                var put2 = document.getElementById("prob5");
                var put3 = document.getElementById("prob6");
                put2.innerHTML = "m1=" + m1;
                put3.innerHTML = "n1=" + n1;
                if (((k >= x) && (k <= (x + 20))) || (((k + 20) >= x) && ((k + 20) <= (x + 20)))) {
                    meeting1();
                }
                else { }
            }
        }
        else {
            t = 38;
            common1(1);
        }
    }
    else {
        killer();
    }
}
function topit() {
    if (k > 0) {
        if (r4 != 1) {
            r1 = 0;
            r2 = 0;
            r3 = 1;
            s2 = 1;
            if ((s1 == 1) && (c > 2)) {
                if (l >= c) { l = 1; }
                else { }
                s2 = 1;
                clearInterval(topup);
                please = setInterval(real, 100, t);
            }
            else {
                var move2 = document.getElementsByClassName("go");
                for (h = 0; h < c; h++) {
                    move2[h].style.top = k + (h * 20);
                    move2[h].style.left = i;
                }
                k--;
                var letssee = document.getElementById("prob1");
                letssee.innerHTML = "i=" + i;
                var letssee1 = document.getElementById("prob2");
                letssee1.innerHTML = "k=" + k;
                put = document.getElementById("prob3");
                put1 = document.getElementById("prob4");
                put.innerHTML = "s1=" + s1;
                put1.innerHTML = "s2=" + s2;
                var put2 = document.getElementById("prob5");
                var put3 = document.getElementById("prob6");
                put2.innerHTML = "m1=" + m1;
                put3.innerHTML = "n1=" + n1;
                if (((k >= x) && (k <= (x + 20))) || (((k + 20) >= x) && ((k + 20) <= (x + 20)))) {
                    meeting1();
                }
                else { }
            }
        }
        else {
            t = 40;
            common1(2);
        }
    }
    else {
        killer();
    }
}
function leftit() {
    if (i > 0) {
        if (r1 != 1) {
            r2 = 1;
            r3 = 0;
            r4 = 0;
            s1 = 1;
            if ((s2 == 1) && (c > 2)) {
                s1 = 1;
                if (l >= c) { l = 1; }
                else { }
                clearInterval(leftup);
                please = setInterval(real, 100, t);
            }
            else {
                var move3 = document.getElementsByClassName("go");
                for (h = 0; h < c; h++) {
                    move3[h].style.left = i + (h * 20);
                    move3[h].style.top = k;
                }
                i--;
                var letssee = document.getElementById("prob1");
                letssee.innerHTML = "i=" + i;
                var letssee1 = document.getElementById("prob2");
                letssee1.innerHTML = "k=" + k;
                put = document.getElementById("prob3");
                put1 = document.getElementById("prob4");
                put.innerHTML = "s1=" + s1;
                put1.innerHTML = "s2=" + s2;
                var put2 = document.getElementById("prob5");
                var put3 = document.getElementById("prob6");
                put2.innerHTML = "m1=" + m1;
                put3.innerHTML = "n1=" + n1;
                if (((i >= y) && (i <= (y + 20))) || (((i + 20) >= y) && ((i + 20) <= (y + 20)))) {
                    meeting();
                }
                else { }
            }
        }
        else {
            t = 39;
            common1(4);
        }
    }
    else {
        killer();
    }
}
function food() {
    x = Math.floor((Math.random() * 1000000) % 380);
    y = Math.floor((Math.random() * 1000000) % 380);
    var pointer = document.getElementById("food");
    pointer.style.top = x;
    pointer.style.left = y;
}
function meeting() {
    if (((k >= x) && (k <= (x + 20))) || (((k + 20) >= x) && ((k + 20) <= (x + 20)))) {
        food();
        long();
    }
}
function meeting1() {
    if (((i >= y) && (i <= (y + 20))) || (((i + 20) >= y) && ((i + 20) <= (y + 20)))) {
        food();
        long();
    }
}
function meeting2() {
    if (((place3[0] >= x) && (place3[0] <= (x + 20))) || (((place3[0] + 20) >= x) && ((place3[0] + 20) <= (x + 20)))) {
        food();
        long();
    }
}
function meeting3() {
    if (((place2[0] >= y) && (place2[0] <= (y + 20))) || (((place2[0] + 20) >= y) && ((place2[0] + 20) <= (y + 20)))) {
        food();
        long();
    }
}
function stop() {
    clearInterval(please);
    clearInterval(rightup);
    clearInterval(downup);
    clearInterval(leftup);
    clearInterval(topup);
}

function long() {
    var doneit = document.getElementById("longsnake");
    var element = document.createElement("div");
    doneit.appendChild(element);
    var divattribute = document.createAttribute("class");
    divattribute.value = "go";
    element.setAttributeNode(divattribute);
    c++;
}
function animation() {
    solution = document.getElementsByClassName("go");
    for (z = 0; z < c; z++) {
        place[z] = window.getComputedStyle(solution[z]).getPropertyValue("left");
        place1[z] = window.getComputedStyle(solution[z]).getPropertyValue("top");
        place2[z] = parseInt(place[z]);
        place3[z] = parseInt(place1[z]);
    }
}
function real(t1) {
    animation();
    l1 = 1;
    for (z = 1; z < c; z++) {
        if ((place2[0] == place2[z]) || (place3[0] == place3[z])) {
            l1++;
        }
        else { }
    }

    if ((l < c) || (l1 != c)) {

        z1 = 1;

        var solution1 = document.getElementsByClassName("go");
        for (z = 0; z < c - 1; z++) {

            if (z1 == 1) {
                if (t1 == 40) {
                    s2 = 1;
                    solution1[z].style.top = place3[z] + 20;
                }
                else if (t1 == 37) {
                    s1 = 1;
                    solution1[z].style.left = place2[z] - 20;
                }
                else if (t1 == 38) {
                    s2 = 1;
                    solution1[z].style.top = place3[z] - 20;
                }
                else if (t1 == 39) {
                    s1 = 1;
                    solution1[z].style.left = place2[z] + 20;
                }
                else { }

            }
            else { }
            solution1[z + 1].style.top = place3[z];
            solution1[z + 1].style.left = place2[z];
            z1 = 110;
        }
        l++;
        var put4 = document.getElementById("prob7");
        var put5 = document.getElementById("prob8");

        put.innerHTML = "s1=" + s1;
        put1.innerHTML = "s2=" + s2;
        put4.innerHTML = "l1=" + l1;
        put5.innerHTML = "l=" + l;
    }
    else {
        clearInterval(please);
        l = 1;
        s1 = 0;
        s2 = 0;
        if (t1 == 40) {
            k = place3[0] + 20;
            i = place2[0];
            common1(2);
        }
        else if (t1 == 37) {
            k = place3[0];
            i = place2[0] - 20;
            common1(3);
        }
        else if (t1 == 38) {
            k = place3[0] - 20;
            i = place2[0];
            common1(1);
        }
        else if (t1 == 39) {
            k = place3[0];
            i = place2[0] + 20;
            common1(4);
        }
        else { }
        put.innerHTML = "s1=" + s1;
        put1.innerHTML = "s2=" + s2;
        put4.innerHTML = "l1=" + l1;
        put5.innerHTML = "l=" + l;
    }
    if ((t1 == 37) || (t1 == 39)) {
        if (((place2[0] >= y) && (place2[0] <= (y + 20))) || (((place2[0] + 20) >= y) && ((place2[0] + 20) <= (y + 20)))) {
            meeting2();
        }
        else { }
    }
    else { }
    if ((t1 == 38) || (t1 == 40)) {
        if (((place3[0] >= x) && (place3[0] <= (x + 20))) || (((place3[0] + 20) >= x) && ((place3[0] + 20) <= (x + 20)))) {
            meeting3();
        }
        else { }
    }
    else { }
    animation();
    for (z = 4; z < c; z++) {
        if ((place2[0] == place2[z + 1]) && (place3[0] == place3[z + 1])) {
            killer();
        }
        else { }
    }
    if ((place2[0] + 20 > 400) || (place2[0] < 0) || (place3[0] < 0) || (place3[0] + 20 > 400)) {
        killer();
    }
    else { }
}
function killer() {
    alert("Game Over");
    alert("Your score is " + c);
    stop();
    location.reload();
}