import "./style/App.css";

function App() {
  return (
    <div className="App">
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
      <div class="describe_wrap">
        <div class="describe_title">
          <div class="describe_text">
            <p class="describe_text_path">ПРЯМОЕ КАРГО ИЗ КИТАЯ</p>
            <p class="describe_text_data">
              Доставляем любые грузы из Китая по честной цене
            </p>
            <div class="button_wrap">
              <div class="button_wrap_calculation">
                <button class="button_wrap_calculation_btn">
                  Рассчитать стоимость
                </button>
                <img
                  class="button_wrap_calculation_img"
                  src="./img/button.svg"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calculation_wrap">
        <div class="calculation_form_wrapper">
          <div class="calculation_form_title">
            <p class="calculation_title_text">
              
              ПОЛУЧИТЬ РАССЧЕТ СТОИМОСТИ ДОСТАВКИ ВАШЕГО ГРУЗА
            </p>
          </div>
          <div class="calculation_form">
            <div class="form">
              <div class="calculation_form_data">
                <div class="calculation_form_grade">
                  <div class="calculation_form_data_text">
                    <p class="calculation_form_data_text_grade">
                      Категория товара:
                    </p>
                  </div>
                  <input
                    class="calculation_form_grade_input"
                    placeholder="Категория товара"
                    type="text"
                  />
                </div>
                <div class="calculation_form_price">
                  <div class="calculation_form_price_text">
                    <p class="calculation_form_price_text_load">
                      Стоимость груза:
                    </p>
                  </div>
                  <input
                    class="calculation_form_price_input"
                    placeholder="Введите стоимость"
                    type="number"
                  />
                </div>
              </div>
              <div class="calculation_form_values">
                <div class="calculation_form_heft">
                  <div class="calculation_form_heft_text">
                    <p class="calculation_form_heft_load">Вес груза (кг):</p>
                  </div>
                  <input
                    class="calculation_form_heft_input"
                    placeholder="Введите вес"
                    type="number"
                  />
                </div>
                <div class="calculation_form_scope">
                  <div class="calculation_form_scope_text">
                    <p class="calculation_form_scope_text_load">
                      Объем груза (м3):
                    </p>
                    <a class="calculation_form_scope_text_link" href="#">
                      Рассчитать
                    </a>
                  </div>
                  <input
                    class="calculation_form_scope_input"
                    placeholder="Введите объем"
                    type="number"
                  />
                </div>
              </div>
              <div class="calculation_form_code">
                <div class="calculation_form_code_title">
                  <div class="calculation_form_code_checkboxs">
                    <input
                      class="calculation_form_code_checkboxs_coverage"
                      type="checkbox"
                    />
                    <input
                      class="calculation_form_code_checkboxs_сustoms-clearance"
                      type="checkbox"
                    />
                  </div>
                  <div class="calculation_form_code_title_text">
                    <p class="calculation_form_code_title_text_coverage">
                      Страховка
                    </p>
                    <p class="calculation_form_code_title_text_сustoms-clearance">
                      Таможенное оформление
                    </p>
                  </div>
                </div>
                <div class="calculation_form_code_sms">
                  <div class="calculation_form_code_sms_text">
                    <p class="calculation_form_code_sms_text_tel">
                      Код ТН ВЭД:
                    </p>
                  </div>
                  <input
                    class="calculation_form_code_sms_input"
                    placeholder="Введите код"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="calculation_form_img">
              <p class="calculation_form_img_text">фотография.jpeg</p>
              <a class="calculation_form_img_text_del" href="#">
                Удалить фото
              </a>
            </div>
            <div class="calculation_form_btn">
              <a class="calculation_form_btn-img" href="#">
                Загрузить фото товара
              </a>
            </div>
            <div class="calculation_form_btn_next">
              <div class="calculation_form_btn_next_link">
                <a class="calculation_form_btn_next_link_text" href="#">
                  Следующий шаг
                </a>
                <img
                  class="calculation_form_btn_next_link_img"
                  src="./img/button.svg"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="calculation_wrap_img">
          <img
            src="./img/medium-shot-man-holding-clipboard_1-removebg 1.svg"
            alt="#"
          />
        </div>
      </div>
      <div class="information_wrap">
        <div class="information_wrap_title">
          <div class="information_wrap_title_text">
            <h1>Почему стоит выбрать именно нас?</h1>
            <hr class="information_wrap_title_hr" />
          </div>
        </div>
        <div class="information_wrap_gains">
          <div class="information_wrap_gains_imgs">
            <img src="./img/1.svg" alt="#" />
            <img src="./img/2.svg" alt="#" />
            <img src="./img/3.svg" alt="#" />
            <img src="./img/4.svg" alt="#" />
          </div>
          <div class="information_wrap_gains_imgs-too">
            <img src="./img/5.svg" alt="#" />
            <img src="./img/6.svg" alt="#" />
            <img src="./img/7.svg" alt="#" />
            <img src="./img/8.svg" alt="#" />
          </div>
        </div>
      </div>
      <div class="delivery_wrap">
        <div>
          <h2>ВАРИАНТЫ ДОСТАВКИ ГРУЗОВ ИЗ КИТАЯ</h2>
          <hr class="delivery_wrap_hr" />
        </div>
      </div>
      <div class="delivery_wrap_variants">
        <div class="delivery_wrap_ordinary">
          <div class="delivery_wrap_ordinary_box">
            <div class="delivery_wrap_ordinary_box_img"></div>
            <div>
              <div>
                <p class="delivery_wrap_ordinary_box_text">Авто - обычная</p>
              </div>
              <div class="delivery_wrap_ordinary_box_info">
                <div class="delivery_wrap_ordinary_box_info_days">
                  <img
                    class="delivery_wrap_ordinary_box_info_days_img"
                    src="./img/calendar.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_ordinary_box_info_days_text">
                    9-15 дней
                  </p>
                </div>
                <div class="delivery_wrap_ordinary_box_info_heft">
                  <img
                    class="delivery_wrap_ordinary_box_info_heft_img"
                    src="./img/box.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_ordinary_box_info_heft_text">
                    от 5 кг
                  </p>
                </div>
              </div>
              <div>
                <p class="delivery_wrap_ordinary_box_price">от 2,5$/кг</p>
              </div>
              <div class="delivery_wrap_ordinary_box_btns">
                <div>
                  <button class="delivery_wrap_ordinary_btn-application">
                    Оставить заявку
                  </button>
                </div>
                <div>
                  <button class="delivery_wrap_ordinary_btn-more">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery_wrap_fast-track">
          <div class="delivery_wrap_fast-track_box">
            <div class="delivery_wrap_fast-track_img"></div>
            <div>
              <div>
                <p class="delivery_wrap_fast-track_box_text">
                  Авто - ускоренная
                </p>
              </div>
              <div class="delivery_wrap_fast-track_box_info">
                <div class="delivery_wrap_fast-track_box_info_days">
                  <img
                    class="delivery_wrap_fast-track_box_info_days_img"
                    src="./img/calendar.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_fast-track_box_info_days_text">
                    9-15 дней
                  </p>
                </div>
                <div class="delivery_wrap_fast-track_box_info_helf">
                  <img
                    class="delivery_wrap_fast-track_box_info_helf_img"
                    src="./img/box.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_fast-track_box_info_helf_text">
                    от 5 кг
                  </p>
                </div>
              </div>
              <div>
                <p class="delivery_wrap_fast-track_box_price">от 2,5$/кг</p>
              </div>
              <div class="delivery_wrap_fast-track_box_btns">
                <div>
                  <button class="delivery_wrap_fast-track_btn-application">
                    Оставить заявку
                  </button>
                </div>
                <div>
                  <button class="delivery_wrap_fast-track_btn-more">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery_wrap_fast-track">
          <div class="delivery_wrap_fast-track_box">
            <div class="delivery_wrap_fast-tracked_img"></div>
            <div>
              <div>
                <p class="delivery_wrap_fast-track_box_text">
                  Авто - ускоренная
                </p>
              </div>
              <div class="delivery_wrap_fast-track_box_info">
                <div class="delivery_wrap_fast-track_box_info_days">
                  <img
                    class="delivery_wrap_fast-track_box_info_days_img"
                    src="./img/calendar.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_fast-track_box_info_days_text">
                    9-15 дней
                  </p>
                </div>
                <div class="delivery_wrap_fast-track_box_info_helf">
                  <img
                    class="delivery_wrap_fast-track_box_info_helf_img"
                    src="./img/box.svg"
                    alt="#"
                  />
                  <p class="delivery_wrap_fast-track_box_info_helf_text">
                    от 5 кг
                  </p>
                </div>
              </div>
              <div>
                <p class="delivery_wrap_fast-track_box_price">от 2,5$/кг</p>
              </div>
              <div class="delivery_wrap_fast-track_box_btns">
                <div>
                  <button class="delivery_wrap_fast-track_btn-application">
                    Оставить заявку
                  </button>
                </div>
                <div>
                  <button class="delivery_wrap_fast-track_btn-more">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services_wrap">
        <div>
          <p class="services_wrap_text">УСЛУГИ</p>
          <hr class="services_wrap_hr" />
        </div>
        <div class="favors_wrapper">
          <div class="buyback_wrapper">
            <div class="buyback_wrapper_texts">
              <p class="buyback_wrapper_text-title">Выкуп товара</p>
              <p class="buyback_wrapper_text-basic">
                Компания - это полный комплекс логистических услуг по доставке
                грузов из Китая в Россию - сборные грузы и цельные товарные
                партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
              </p>
            </div>
            <div class="favors_wrapper_btn">
              <button class="favors_wrapper_btn_more">Подробнее</button>
            </div>
          </div>
          <div class="cargo-insurance_wrapper">
            <div class="cargo-insurance_wrapper_texts">
              <p class="cargo-insurance_wrapper_text-title">Страховка груза</p>
              <p class="cargo-insurance_wrapper_text-basic">
                Компания - это полный комплекс логистических услуг по доставке
                грузов из Китая в Россию - сборные грузы и цельные товарные
                партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
              </p>
            </div>
            <div class="favors_wrapper_btn">
              <button class="favors_wrapper_btn_more">Подробнее</button>
            </div>
          </div>
          <div class="warehouse-rental_wrapper">
            <div class="warehouse-rental_wrapper_texts">
              <p class="warehouse-rental_wrapper_texts-title">Аренда склада</p>
              <p class="warehouse-rental_wrapper_texts-basic">
                Компания - это полный комплекс логистических услуг по доставке
                грузов из Китая в Россию - сборные грузы и цельные товарные
                партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
              </p>
            </div>
            <div class="favors_wrapper_btn">
              <button class="favors_wrapper_btn_more">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <div class="company-profile_wrapper">
        <div class="company-profile_texts-wrap">
          <div>
            <p class="company-profile_text-title">О КОМПАНИИ</p>
            <hr class="company-profile_texts_hr" />
            <p class="company-profile_text-basic">
              Компания Азия Карго - это полный комплекс логистических услуг по
              доставке грузов из Китая в Россию - сборные грузы и цельные
              товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. Для
              вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы работаем
              на рынке более 4 лет, а руководители компании занимаются
              логистикой уже более 11 лет.
            </p>
            <p class="company-profile_text-basic">
              Мы стремимся предоставить лучшие условия доставки и лучший сервис
              своим клиентам. Выбирая нас - вы выбираете качественную доставку
              оптимальную по цене и времени! Убедитесь в этом сами!
            </p>
          </div>
        </div>
        <div class="company-profile_wrapper_img"></div>
      </div>
      <div class="questions_title">
        <div>
          <h3>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
          <hr />
        </div>
      </div>
      <div class="questions_wrapper">
        <div class="questions_wrapper-title">
          <div class="questions_wrapper_box">
            <p class="questions_wrapper_box_text">
              Как рассчитывается стоимость доставки?
            </p>
            <img
              class="questions_wrapper_box_img"
              src="./img/arrow-circle-left 1.svg"
              alt="#"
            />
          </div>
          <div class="questions_wrapper_box">
            <p class="questions_wrapper_box_text">
              Как происходит оплата за доставку груза?
            </p>
            <img
              class="questions_wrapper_box_img"
              src="./img/arrow-circle-left 1.svg"
              alt="#"
            />
          </div>
          <div class="questions_wrapper_box">
            <p class="questions_wrapper_box_text">
              Как быстро оформить заказ на доставку из Китая в Россию?
            </p>
            <img
              class="questions_wrapper_box_img"
              src="./img/arrow-circle-left 1.svg"
              alt="#"
            />
          </div>
          <div class="questions_wrapper_box-open">
            <div class="questions_wrapper_box_texts-open">
              <p class="questions_wrapper_box_text_title-open">
                Как быстро оформить заказ на доставку из Китая в Россию?
              </p>
              <p class="questions_wrapper_box_text_basic-open">
                Да, мы предоставляем такую услугу, мы можем взять оплату товара
                в Китае на себя. Если у вас нет валютного счёта, то можете
                оплатить товар в рублях на наш счет в России.
              </p>
            </div>
            <img
              class="questions_wrapper_box_img-open"
              src="./img/arrow-circle-left 2.svg"
              alt="#"
            />
          </div>
          <div class="questions_wrapper_box">
            <p class="questions_wrapper_box_text">
              В чём особенность КАРГО доставки из Китая
            </p>
            <img
              class="questions_wrapper_box_img"
              src="./img/arrow-circle-left 1.svg"
              alt="#"
            />
          </div>
          <div class="questions_wrapper_box">
            <p class="questions_wrapper_box_text">
              Какой срок доставки из Китая?
            </p>
            <img
              class="questions_wrapper_box_img"
              src="./img/arrow-circle-left 1.svg"
              alt="#"
            />
          </div>
        </div>
        <div class="questions_form">
          <div class="questions_form_texts">
            <p class="questions_form_text-title">Остались вопросы?</p>
            <p class="questions_form_text-basic">
              Оставьте заявку и наш менеджер ответит вам в ближайшее время
            </p>
          </div>
          <div class="questions_form_inputs">
            <input class="questions_input" placeholder="Имя *" type="text" />
            <input class="questions_input" placeholder="Телефон *" type="tel" />
            <input class="questions_input" placeholder="E-mail" type="text" />
            <input
              class="questions_input"
              placeholder="Ваш вопрос"
              type="text"
            />
          </div>
          <div class="questions_form_btn-box">
            <button class="questions_form_btn">Отправить запрос</button>
            <img class="questions_form_img" src="./img/button.svg" alt="#" />
          </div>
        </div>
      </div>
      <div class="collaboration_wrapper">
        <div class="collaboration_wrapper_title">
          <div>
            <p class="collaboration_wrapper_text-title">
              ГОТОВЫ К СОТРУДНИЧЕСТВУ?
            </p>
            <p class="collaboration_wrapper_text-basic">
              Зарегистрируйте груз!
            </p>
            <hr class="collaboration_wrapper_title_hr" />
          </div>
        </div>
        <div class="collaboration_describe">
          <div class="collaboration_describe_texts">
            <p>
              • Для того, чтобы начать сотрудничество, необходимо оформить груз
              указав информацию о содержимом груза, его стоимость и количество.
              А так-же прикрепив фотографии к заявке.
            </p>
            <p>
              • Если требуется проверка товара на соответсвие количеству, то при
              оформлении груза на нашем сайте укажите это в графе "Примечание".
              Данная услуга платная и составляет 3 юаня за одну позицию в
              заказе. Любые дополнительные проверки груза обсуждаются
              индивидуально в том числе и их стоимость.
            </p>
            <p>
              • До отправки груза на наш склад в Китае обязательно позаботьтесь
              о том, чтобы сделать маркировку, с номером Вашего заказа у нас на
              сайте, для каждой внешней коробки, чтобы мы смогли определить
              именно Ваш груз. Если у Вас нет возможности сделать это
              самостоятельно, то попросите об этом своего поставщика.
            </p>
          </div>
          <div class="collaboration_describe_img"></div>
        </div>
        <div class="collaboration_describe">
          <div class="collaboration_describe_img-second"></div>
          <div class="collaboration_describe_texts">
            <p>
              • После отправки груза на наш склад в Китае, Вам обязательно нужно
              указать трек-номер для отслеживания посылок по Китаю для каждой
              позиции в заказе. Внести трек-номер можно на странице заказа.
              Трек-номер - это ещё одна мера для идентификации Вашего груза на
              нашем складе.
            </p>
            <p>
              • Если Вы оформили груз по нашей инструкции и сделали все
              правильно, то при получении Вашего груза на складе в Китае статус
              заказа изменится на "На складе".
            </p>
            <div class="collaboration_describe_btn-box">
              <button class="collaboration_describe_btn">
                Отправить запрос
              </button>
              <img
                class="collaboration_describe_arrow"
                src="./img/button.svg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer_container">
        <div class="footer_container-box">
          <hr class="footer_container_hr" />
        </div>
      </div>
      <footer>
        <div class="footer_info">
          <img class="footer_info_img" src="./img/logo.svg" alt="#" />
          <p class="footer_info_tel">8(800)600-18-69</p>
          <a class="footer_info_e-mail" href="#">
            info@cargoasia.info
          </a>
          <p class="footer_info_text">Адрес в Китае:</p>
          <p class="footer_info_address">
            浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房 高建军
            电话15966660379
          </p>
          <div class="footer_messengers">
            <img src="./img/05.instagram.svg" alt="#" />
            <img src="./img/015-vkontakte.svg" alt="#" />
            <img src="./img/telegram.svg" alt="#" />
          </div>
        </div>
        <div class="footer_navigation">
          <p class="footer_text">Грузоперевозки</p>
          <a class="footer_link" href="#">
            Цены и сроки
          </a>
          <a class="footer_link" href="#">
            Услуги
          </a>
          <a class="footer_link" href="#">
            О компании
          </a>
          <a class="footer_link" href="#">
            Контакты
          </a>
          <a class="footer_link" href="#">
            Оформить груз
          </a>
        </div>
        <div class="footer_navigation">
          <p class="footer_text">Услуги</p>
          <a class="footer_link" href="#">
            Выкуп товара
          </a>
          <a class="footer_link" href="#">
            Страховка груза
          </a>
          <a class="footer_link" href="#">
            Аренда склада
          </a>
          <a class="footer_link" href="#">
            Перевод денежных средств
          </a>
        </div>
        <div class="footer_navigation">
          <p class="footer_text">Информация</p>
          <a class="footer_link" href="#">
            Отзывы
          </a>
          <a class="footer_link" href="#">
            Требования к грузу
          </a>
          <a class="footer_link" href="#">
            Договор-оферта
          </a>
          <a class="footer_link" href="#">
            Как заключить договор
          </a>
          <a class="footer_link" href="#">
            Способы оплаты услуг
          </a>
          <a class="footer_link" href="#">
            Документы
          </a>
          <a class="footer_link" href="#">
            Статьи
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
