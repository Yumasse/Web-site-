function performlist() {
  window.location.href = `list.html`;
}

function performpost1() {
  window.location.href = `post1.html`;
}



function performpost2() {

  window.location.href = `post2.html`;
}



function performbook1() {
  window.location.href = `book1.html`;
}

function performbook2() {


    window.location.href = 'book2.html';
}

function performback() {
  window.location.href = `index.html`;
}









function scrollToAbout() {
    var eventsSection = document.getElementById('about');

    if (eventsSection) {
        eventsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToEvents() {
    var eventsSection = document.getElementById('events');

    if (eventsSection) {
        eventsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}



function scrollToContacts() {
    var eventsSection = document.getElementById('contacts');

    if (eventsSection) {
        eventsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


