var _url = "https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json";

$.getJSON(_url, function (json) {
    var res = json;
// ---------------skills
    var skills = _.map(res, 'skills');
    skills = _.flatten(skills);
    skills = _.uniq(skills);

    function sortArr(a, b) {
        a = _.lowerCase(a);
        b = _.lowerCase(b);
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        if (a == b)
            return 0;
    }

    skills = skills.sort(sortArr);
    console.log('skills', skills);

// --------------------names

    var names = _.sortBy(res, function (a) {
        return a.friends.length;
    });
    names = _.map(names, 'name');
    names = _.reverse(names);
    console.log('names', names);

// ----------------------userfriends

    var friends = _.map(res, 'friends');
    friends = _.flatten(friends);
    friends = _.map(friends, 'name');
    friends = _.uniq(friends);
    console.log('friends', friends);
});
