const overView = document.querySelectorAll('.overview-box')
const theme = document.getElementById('theme-change');
const number = document.querySelectorAll('.number')
const socialBox = document.querySelectorAll('.social-box')
const follower = document.querySelectorAll('.follower')
const content = document.querySelectorAll('.content ')
const username = document.querySelectorAll('.username ')

overView.forEach((overView) => {
    theme.addEventListener('change', () => {
        overView.classList.toggle('dark');
    });
  });

  number.forEach((number) => {
    theme.addEventListener('change', () => {
        number.classList.toggle('dark');
    });
  });
  socialBox.forEach((socialBox) => {
    theme.addEventListener('change', () => {
        socialBox.classList.toggle('dark');
    });
  });

  follower.forEach((follower) => {
    theme.addEventListener('change', () => {
        follower.classList.toggle('white');
    });
  });

  content.forEach((content) => {
    theme.addEventListener('change', () => {
        content.classList.toggle('white');
    });
  });

  username.forEach((username) => {
    theme.addEventListener('change', () => {
      username.classList.toggle('white');
    });
  });