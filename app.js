function themeChange() {
    const theme = document.getElementById('theme-change');
    const bodyColor = document.querySelector('.container');
    const headColor = document.querySelector('.header');
    var header = document.getElementById('title')
    const overviewToday = document.querySelector('.overview-today');
    const socialBoxIg = document.querySelector('.social-box-instargram')

    theme.addEventListener('change', ()=>{
        bodyColor.classList.toggle('dark');
        headColor.classList.toggle('dark');
        header.classList.toggle('dark');
        overviewToday.classList.toggle('dark');
        socialBoxIg.classList.toggle('special');
    });
}




themeChange()

