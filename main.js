let menubtn = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.side-bar');
let videoscontainer = document.querySelector('.videos-container');

menubtn.onclick = function() {
    sidebar.classList.toggle('resize-sidebar');
    // sidebar.classList.toggle('sidebar-show');
    videoscontainer.classList.toggle('resize-videos-container');
}