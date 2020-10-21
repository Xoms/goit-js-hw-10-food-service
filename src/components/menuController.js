import menu from '../menu.json';

const Handlebars = require('handlebars');

const itemSource = 
`<li class="menu__item">
<div class="card">
  <img
    src="{{ image }}"
    alt="{{ name }}"
    class="card__image"
  />
  <div class="card__content">
    <h2 class="card__name">{{ name }}</h2>
    <p class="card__price">
      <i class="material-icons">
        monetization_on
      </i>
      {{price}} кредитов
    </p>

    <p class="card__descr">
      {{description}}
    </p>

    <ul class="tag-list">
        {{#each ingerdients}}
            <li class="tag-list__item">{{this}}</li>
        {{/each}}
    </ul>
  </div>

  <button class="card__button button">
    <i class="material-icons button__icon">
      shopping_cart
    </i>
    В корзину
  </button>
</div>
</li>`;

const template = Handlebars.compile(itemSource);

class MenuController {

    liElements = []; //будущий массив li HTML

    constructor(){
        this.menu = menu; //когда писал JSON.parse(menu) - почему-то валило ошибку
    }

    parseToHTML(){
        this.menu.forEach( item  => {
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