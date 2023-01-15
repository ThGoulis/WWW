function BioMenu() {
    var x = document.getElementById("BioMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function BioNavOpen() {
    document.getElementById("Bionav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("BioMenu").style.marginLeft = "200px";

}

function BioMenuOpen() {
    document.getElementById("BioMenu").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function BioNavClose() {
    document.getElementById("Bionav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("BioMenu").style.display = "none";
}

function PhotoMenu() {
    var x = document.getElementById("PhotoMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function PhotoNavOpen() {
    document.getElementById("Photonav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function PhotoMenuOpen() {
    document.getElementById("PhotoMenu").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function PhotoNavClose() {
    document.getElementById("Photonav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("PhotoMenu").style.display = "none";
}

function BookMenu() {
    var x = document.getElementById("BookMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function BooksNavOpen() {
    document.getElementById("Booksnav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";

}

function BooksMenuOpen() {
    document.getElementById("BookMenu").style.borderBlockWidth = "200px";
    document.getElementById("main").style.marginLeft = "200px";

}

function BooksNavClose() {
    document.getElementById("Booksnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("BookMenu").style.display = "none";
}


function LinkNavOpen() {
    document.getElementById("Linknav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function LinkNavClose() {
    document.getElementById("Linknav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loginMenuOpen() {
    var x = document.getElementById("login");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function registerMenuOpen() {
    var y = document.getElementById("register");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function ManagementNavOpen() {
    document.getElementById("Managementnav").style.width = "200px";
    document.getElementById("login").style.marginLeft = "200px";
    document.getElementById("register").style.marginLeft = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function ManagementNavClose() {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("login").style.marginRight = "0";
    document.getElementById("register").style.marginRight = "0";
    document.getElementById("Managementnav").style.width = "0";
}