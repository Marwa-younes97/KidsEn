// magazine buttons navigation

var magazineBtn = document.getElementsByTagName("input");
console.log(magazineBtn);

var magazineUrl = [
    'Ramadan.html',
    "World Teachers' Day.html",
    'International Day of Older Persons.html',
    'International Day of Sign Languages.html',
    'International Day of Peace.html'
];

for (var i = 0; i < magazineBtn.length; i++) {
    addNavigation(magazineBtn[i], magazineUrl[i]);
}
