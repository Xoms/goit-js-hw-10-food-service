import menu from '../menu.json';
import template from '../templates/menu.handlebars'

class MenuController {

    liElements = []; //будущий массив li HTML

    constructor(){
      console.log(template)
        this.menu = menu; //когда писал JSON.parse(menu) - почему-то валило ошибку
    }

    parseToHTML(){
        this.menu.forEach( item  => {
          console.log(template(item))
            this.liElements.push(template(item));
        });
    }

    render() {
        this.parseToHTML();
        const ul = document.querySelector('.js-menu');
        this.liElements.forEach(li => {
            ul.innerHTML += li;
        });
    }
}

const menuController = new MenuController;
menuController.render();