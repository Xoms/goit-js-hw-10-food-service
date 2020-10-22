import menu from '../menu.json';
import template from '../templates/menu.handlebars'

class MenuController {

    constructor(){
        this.menu = menu; 
    }

    render() {
        document.querySelector('.js-menu').innerHTML = this.menu.
          reduce( (acc, item) => acc + template(item), '');
    }
}

const menuController = new MenuController;
menuController.render();