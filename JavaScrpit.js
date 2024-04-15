// document.addEventListener('DOMContentLoaded', function () {
//     const toggles = document.querySelectorAll('.toggle');

//     toggles.forEach(toggle => {
//         toggle.addEventListener('click', function () {
//             const targetId = this.getAttribute('data-target');
//             const targetElement = document.getElementById(targetId);

//             targetElement.classList.toggle('hidden');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            targetElement.classList.toggle('hidden');
        });
    });
});
