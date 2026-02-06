<?php

$fullDomain = strtolower($_SERVER['HTTP_HOST'] ?? '');
$fullDomain = explode(':', $fullDomain)[0];

$parts = explode('.', $fullDomain);
$domainSlug = count($parts) >= 2
        ? $parts[count($parts) - 2]
        : $fullDomain;

$domainTitle = ucwords(str_replace('-', ' ', $domainSlug));

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>
        <?= $domainTitle ?> — Образовательная платформа
    </title>
    <link rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M20,50 Q50,10 80,50 T20,90' fill='none' stroke='%2300ffd5' stroke-width='8'/></svg>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Syne:wght@700;800&display=swap"
        rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header class="header">
        <div class="container header__container">
            <a href="./#hero" class="logo">
                <span class="logo__dot"></span>
                <span class="logo__text">
                    <?= $domainTitle ?>
                </span>
            </a>

            <nav class="nav">
                <ul class="nav__list">
                    <li><a href="./#hero" class="nav__link">Главная</a></li>
                    <li><a href="./#about" class="nav__link">О платформе</a></li>
                    <li><a href="./#courses" class="nav__link">Программы</a></li>
                    <li><a href="./#tech" class="nav__link">Технологии</a></li>
                    <li><a href="./#faq" class="nav__link">FAQ</a></li>
                </ul>
            </nav>

            <a href="./#contact" class="btn btn--outline">Связаться</a>

            <button class="burger" aria-label="Menu">
                <span></span>
            </button>
        </div>
    </header>
<main>
    <section class="pages">
        <div class="container reveal">
            <h1>Политика возврата средств</h1>
            
            <h2>Условия для оформления возврата</h2>
            <p>
                Вы можете претендовать на полный или частичный возврат средств в
                следующих ситуациях:
            </p>
            <ul>
                <li>
                    <strong>Несоответствие программы описанию:</strong> Если содержание
                    предоставленного курса или инновационного образовательного материала существенно отличается от программы,
                    заявленной на сайте <strong><?= $domainTitle ?></strong> на момент покупки.
                </li>
                <li>
                    <strong>Технические неисправности с нашей стороны:</strong> При
                    возникновении критических технических проблем на платформе
                    <strong><?= $fullDomain ?></strong>, которые делают доступ к материалам невозможным и не были
                    устранены нашей командой в разумные сроки.
                </li>
                <li>
                    <strong>Отказ в течение «периода охлаждения»:</strong> В соответствии с законодательством Великобритании, вы
                    имеете право отказаться от участия в программе в течение 14 (четырнадцати) календарных
                    дней с момента оплаты, при условии, что вы еще не начали просмотр или скачивание учебных материалов.
                </li>
            </ul>

            <h2>Процедура запроса на возврат</h2>
            <p>
                Чтобы инициировать процедуру возврата на платформе <strong><?= $domainTitle ?></strong>, пожалуйста, выполните
                следующие шаги:
            </p>
            <ol class="custom-list">
                <li>
                    Составьте письмо и отправьте его на наш официальный email:
                    <a href="mailto:hello@<?= $fullDomain ?>">hello@<?= $fullDomain ?></a>.
                </li>
                <li>
                    В теме письма обязательно укажите: «Запрос на возврат средств».
                </li>
                <li>
                    В теле письма предоставьте полную информацию: ваше имя и фамилию,
                    email, который использовался при регистрации, и точное название выбранной программы.
                </li>
                <li>
                    Четко и подробно опишите причину, по которой вы запрашиваете
                    возврат, со ссылкой на один из пунктов наших условий.
                </li>
                <li>
                    После получения письма наша служба поддержки в Лондоне рассмотрит ваш запрос
                    и свяжется с вами для предоставления дальнейших инструкций в течение 3-х рабочих дней.
                </li>
            </ol>

            <h2>Сроки и способ возврата</h2>
            <p>
                После одобрения вашего запроса, возврат денежных средств будет
                произведен в течение 7–14 рабочих дней. Средства будут возвращены
                тем же способом, которым была совершена оплата. Обратите внимание, что фактический срок зачисления
                может зависеть от регламента работы вашего банка или платежной системы в <strong>Великобритании</strong> или стране вашего пребывания.
            </p>

            <h2>Исключения и ограничения</h2>
            <p>Возврат средств не может быть осуществлен, если:</p>
            <ul>
                <li>
                    Запрос подан по истечении 14 календарных дней с момента оплаты (после завершения установленного законом периода).
                </li>
                <li>
                    Вы уже изучили, просмотрели или скачали более 50% материалов программы, независимо
                    от времени, прошедшего с момента покупки.
                </li>
                <li>
                    Причиной невозможности пройти обучение являются технические
                    проблемы на стороне пользователя (например, отсутствие доступа к сети или несовместимое ПО).
                </li>
                <li>
                    Были нарушены другие условия Пользовательского соглашения <strong><?= $domainTitle ?></strong> с вашей
                    стороны.
                </li>
            </ul>

            <h2>Изменения в политике</h2>
            <p>
                <strong><?= $domainTitle ?></strong> оставляет за собой право вносить изменения в настоящую
                Политику возврата в соответствии с актуальными нормами права. Актуальная версия всегда доступна на этой
                странице <strong><?= $fullDomain ?></strong>.
            </p>

            <h2>Свяжитесь с нами</h2>
            <p>
                По всем вопросам, связанным с возвратом средств или условиями
                обучения, пожалуйста, обращайтесь в нашу службу поддержки:
                <br><br>
                <strong>Email:</strong> <a href="mailto:hello@<?= $fullDomain ?>">hello@<?= $fullDomain ?></a><br>
                <strong>Телефон:</strong> <a href="tel:+442014472773">+44 20 1447 2773</a>
            </p>
        </div>
    </section>
</main>


    <footer class="footer">
        <div class="container footer__grid">
            <div class="footer__col">
                <a href="./#hero" class="logo">
                    <span class="logo__dot"></span>
                    <span class="logo__text">
                        <?= $domainTitle ?>
                    </span>
                </a>
                <p class="footer__description">Технологии нового поколения для вашего профессионального роста.</p>
            </div>

            <div class="footer__col">
                <h4 class="footer__title">Меню</h4>
                <ul class="footer__links">
                    <li><a href="./#about">О платформе</a></li>
                    <li><a href="./#courses">Программы</a></li>
                    <li><a href="./#tech">Технологии</a></li>
                    <li><a href="./#faq">Вопросы</a></li>
                </ul>
            </div>

            <div class="footer__col">
                <h4 class="footer__title">Документы</h4>
                <ul class="footer__links">
                    <li><a href="./privacy.php">Privacy Policy</a></li>
                    <li><a href="./cookies.php">Cookie Policy</a></li>
                    <li><a href="./terms.php">Terms of Service</a></li>
                    <li><a href="./return.php">Return Policy</a></li>
                    <li><a href="./disclaimer.php">Disclaimer</a></li>
                    <li><a href="./contact.php">Contact Us</a></li>
                    <li><a href="./personal-data-policy.php">Data Policy</a></li>
                </ul>
            </div>

            <div class="footer__col">
                <h4 class="footer__title">Контакты</h4>
                <ul class="footer__contact">
                    <li><i data-lucide="phone"></i> <a href="tel:+442014472773">+44 20 1447 2773</a></li>
                    <li><i data-lucide="mail"></i> <a href="mailto:hello@<?= $fullDomain ?>">hello@
                            <?= $fullDomain ?>
                        </a></li>
                    <li><i data-lucide="map-pin"></i> 22 Bishopsgate, London EC2N 4AJ, UK</li>
                </ul>
            </div>
        </div>
        <div class="container footer__bottom">
            <p>&copy; 2026
                <?= $fullDomain ?>. Все права защищены.
            </p>
        </div>
    </footer>
    <div class="nav-mobile">
        <ul class="nav__list--mobile">
            <li><a href="./#hero">Главная</a></li>
            <li><a href="./#about">О платформе</a></li>
            <li><a href="./#courses">Программы</a></li>
            <li><a href="./#tech">Технологии</a></li>
            <li><a href="./#contact">Связаться</a></li>
        </ul>
    </div>
    
    <div id="cookie-popup" class="cookie">
        <div class="cookie__content">
            <p>Этот сайт использует cookies для улучшения работы. Подробнее — в нашей <a href="./cookies.php">Cookie
                    политике</a>.</p>
            <button id="cookie-accept" class="btn btn--accent-sm">Принять</button>
        </div>
    </div>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
</body>

</html>