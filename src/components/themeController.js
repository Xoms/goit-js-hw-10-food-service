const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

class ThemeController {

    themeSwitcher = document.querySelector('.js-switch-input');
    bodyClasses = document.body.classList;
    currentTheme = localStorage.getItem('theme') || Theme.LIGHT;

    constructor(){
        this.checkSwitchState()
        this.bodyClasses.add(this.currentTheme);

       // this.changeThemeHandler = this.changeThemeHandler.bind(this);
        //будем слушать чекбокс
        this.themeSwitcher.addEventListener('change', this.changeThemeHandler);
    }

    checkSwitchState(){ //проверяет в каком состоянии был чекбокс и в такое его и ставит
        this.currentTheme === Theme.LIGHT ? this.themeSwitcher.checked = false :
            this.themeSwitcher.checked = true; 
    }

    changeThemeHandler = () => {
        if (this.bodyClasses.contains(Theme.LIGHT) ) {

            this.bodyClasses.replace(Theme.LIGHT, Theme.DARK);
            localStorage.setItem('theme', Theme.DARK);

        } else {

            this.bodyClasses.replace(Theme.DARK, Theme.LIGHT);
            localStorage.setItem('theme', Theme.LIGHT);

        }
    }

}

const themeController = new ThemeController;
