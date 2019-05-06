/* Hero Date elemnt is created with following function */
setHeroDate();

function setHeroDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    var currentdate = month + '.' + day + '.' + year;
    document.getElementById("date").innerHTML = currentdate;

    //returns information for comment section 
    return currentdate;
}


/* declared comment array object, filled with pre-loaded comment objects */
let comments = [
    object = {
        Name: "Jeffrey Jefferson",
        Text: "I really don't understand the avont garde musical stylings of the lead bassist Jordan Jargenson, his bassings facilitate a quadrupling of my inner banoodling",
        Date: setHeroDate(),
        Likes: 10,
    },
    object = {
        Name: "Gooby Booberson",
        Text: "Hey, don't knock Jordan Jargenson, his bass slaps hard",
        Date: setHeroDate(),
        Likes: 2,
    },
    object = {
        Name: "Ronno Bonno",
        Text: "I'm dissapointed in the cooking of the duck meat at the Dusk LP's opening concert, however the lead singer, Luno Bars more than makes up for it with his incredible flying solo quintet",
        Date: setHeroDate(),
        Likes: 300,
    }
]

//invokes display comments, this is only to test the pre-made comments (however if the comments were stored in a server this function call would remain)
displayComment(comments);

/* event listener on form - event listener on submit invokes subfunction(e) */
//add event handler as listener function
document.getElementById("submit").addEventListener("click", () => {
    event.preventDefault();
    let n = document.getElementById("name").value;
    let c = document.getElementById("comments").value;
    let d = setHeroDate();
    let object = {
        Name: n,
        Text: c,
        Date: d
    }
    comments.push(object);
    displayComment(comments);
});

function resetComment() {
    //removes commentHolder div
    for (i = 0; i < comments.length; i++) {
        let e = document.getElementById("commentHolder");
        //developers note: it took me three hours to think of this if statement...
        if (e != null) {
            e.parentNode.removeChild(e);
        }
    }
}

function createComments() {
    //adds commentHolder div
    let x = document.getElementById("comContainer");
    let b = document.createElement("div");

    b.setAttribute('id', "commentHolder");
    x.appendChild(b);
}

function displayComment(c) {

    // function to clear comments
    resetComment();
    // function to create comments
    createComments();

    for (i = 0; i < comments.length; i++) {

        //Identify and assign primary comment holding div to a let
        let d = document.getElementById("commentHolder");

        //create a new div element to contain comment object
        let newComment = document.createElement("div");

        //set comment div style to comment-box[i]
        newComment.setAttribute('class', "comment-box" + ' ' + i);

        //create new name, text, date elements
        let ntxt = document.createElement("h4");
        let ctxt = document.createElement("h4");
        let dtxt = document.createElement("h4");

        //set new name, text, date elements to respective css attributes
        ntxt.setAttribute('id', "comName");
        ctxt.setAttribute('id', "comText");
        dtxt.setAttribute('id', "comDate");

        //sets innerhtml to current array information
        ntxt.innerHTML = comments[i].Name;
        ctxt.innerHTML = comments[i].Text;
        dtxt.innerHTML = comments[i].Date;

        //adds new comment-box div to comment holder
        d.appendChild(newComment);

        //adds new name/date/text to comment-box
        newComment.appendChild(ntxt);
        newComment.appendChild(dtxt);
        newComment.appendChild(ctxt);
    }
}