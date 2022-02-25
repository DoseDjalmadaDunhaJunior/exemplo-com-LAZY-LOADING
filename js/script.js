document.addEventListener('DOMContentLoaded', function(){
    lozad().observe();
});

// lozad('.lozad', {
//     load: function(target) {
//             target.src = target.dataset.src;
//             target.onload = function() {
//                 target.classList.add('fadein');
//             }
//     }
// }).observe();

// $(function() {
//     $('.lozad').lazy();
// });