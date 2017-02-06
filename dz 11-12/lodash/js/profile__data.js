$(function() {
var profileData = [
    {
        name: 'корнейчук алексей андреевич',
        photo: 'image1.jpg',
        work: 'Авиадиспетчер в международном аэропорту &laquoБорисполь&raquo',
        reasons1: 'Много свободного времени, благодаря расписанию на работе',
        reasons2: 'Интересно углубиться во что-нибудь новое',
        reasons3: 'Немного знаком с Wordpress, так как делал на нем сайт жене',
        reasons4: 'И, конечно же, финансовые перспективы',
        phoneNumber: '+380934406432',
        socialProfilesVK: 'https://vk.com/id8190171',
        socialProfilesFB: 'https://www.facebook.com/alex.korney.54',
        socialProfilesLIN: 'https://ua.linkedin.com/in/oleksii-korniichuk-679499129',
        feedback: 'Надеюсь на совмесную плодотворную работу на протяжении всего времени обучения.' +
        ' Постараюсь приложить усилия и сделать от меня возможное.'
    }];
var tmpl = _.template(document.getElementById('profile').innerHTML);
document.getElementsByClassName('.outer-wrapper').innerHTML = tmpl({
    content: profileData
});
});