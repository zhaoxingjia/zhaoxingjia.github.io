var routes = [
    { path: '/list', component: { template: '#list' } },
    { path: '/list1', component: { template: '#list1' } },
    {
        path: '/list2', component: { template: '#list2' }
    },
    {
        path: '/list3', component: { template: '#list3' }
    },
    { path: '/list4', component: { template: '#list4' } },
    { path: '/list5', component: { template: '#list5' } }
]

var router = new VueRouter({
    routes
})

new Vue({
    el: "#box",
    router,
})

var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});