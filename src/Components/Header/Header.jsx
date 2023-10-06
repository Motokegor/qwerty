import './header.scss'

export default function Header() {
  return (
    <header>
    <div class="logo">
      <img src="./img/logo.svg" alt="#" />
    </div>
    <div class="navigation_wrapper">
      <a class="nav_link" href="#">
        Цены и сроки
      </a>
      <a class="nav_link" href="#"></a>
      <a class="nav_link" href="#">
        О компании
      </a>
      <a class="nav_link" href="#">
        Контакты
      </a>
      <a class="nav_link" href="#">
        Оформить груз
      </a>
    </div>
    <button class="btn">Оставить заявку</button>
  </header>
  )
}
