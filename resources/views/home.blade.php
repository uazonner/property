<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Property Project</title>

    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap-theme.min.css') !!}" />
{{--    <link rel="stylesheet" type="text/css" href="{!! asset('css/prosto-forms-all.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/prosto-forms.min.css') !!}" />--}}
    <link rel="stylesheet" type="text/css" href="{!! asset('css/font-awesome.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/slicknav.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap-multiselect.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/style.css') !!}" />


    <script src="{!! asset('js/jquery.min.js') !!}"></script>
    <script src="{!! asset('js/script.js') !!}"></script>
    <script src="{!! asset('js/bootstrap.min.js') !!}"></script>
    <script src="{!! asset('js/jquery.slicknav.min.js') !!}"></script>
    <script src="{!! asset('js/bootstrap-multiselect.js') !!}"></script>

</head>
<body>
<header>
    <div class="container">
        <div class="header">
            <div class="site-info">
                <div class="slogan">Недвижимость Украины</div>
                <div class="site-name"><a href="#">where.com.ua</a></div>
            </div>

            <div class="tracker">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i> <a href="#">2 Апреля 2017, <span id="time">20:46</span></a>
            </div>
        </div>

        <div class="nav">
            <div class="row-top">

                <div class="secondary-menu hidden-xs hidden-sm responsive-menu">
                    <ul id="user-menu">
                        <li class="first"><a href="#">Личный кабинет</a></li>
                        <li><a href="#">Регистрация</a></li>
                    </ul>
                </div>

                <div class="settings hidden-xs hidden-sm responsive-menu">
                    <div class="current-city"><i class="fa fa-plus-square" aria-hidden="true"></i>
                        <a href="#">Выбрать город</a></div>
                    <div class="current-language"><i class="fa fa-globe" aria-hidden="true"></i>
                        <a href="#">Русский</a></div>
                </div>

            </div>
            <div class="row-botoom">
                <div class="primary-menu">
                    <ul id="menu" class="hidden-xs hidden-sm responsive-menu">
                        <li class="first active"><a href="#">Объявления</a></li>
                        <li><a href="#">Новостройки</a></li>
                        <li><a href="#">Застройщики</a></li>
                        <li><a href="#">Спецпредложения</a></li>
                        <li><a href="#">Еще</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Main Page -->
<section id="system-message">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-info">
                      Работа в режиме обслуживания. <a href="#">Переключиться в рабочий режим</a>.
                </div>
            </div>
        </div>
    </div>
</section>
<section id="filter">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="search-property">
                    <h2 class="right-line">Поиск недвижимости: Харьков</h2>

                    <form class="basic-form">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="select-where">
                                    <select title="Тип" name="ads-type" class="form-control">
                                        <option value="0" selected>Купить</option>
                                        <option value="1">Снять</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="select-where">
                                    <select id="rooms-count" multiple="multiple" title="Тип недвижимости" name="type" class="form-control">
                                        <option value="0" selected>Квартиру</option>
                                        <option value="1">Комнату</option>
                                        <option value="2">Дом</option>
                                        <option value="3">Участок</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="select-where">
                                    <select title="Комнаты" name="rooms" class="form-control">
                                        <option value="0" selected disabled>Комнат</option>
                                        <option value="1">Студия</option>
                                        <option value="2">Одна</option>
                                        <option value="3">Две</option>
                                        <option value="4">Три</option>
                                        <option value="5">Четыре</option>
                                        <option value="6">Пять и более</option>
                                        <option value="7">Свободная планировка</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Найти</button>
                    </form>


                    {{--<form action="" class="pf_form">


                        <div class="fieldset">

                            <div class="row">
                                <div class="section span2">
                                    <label class="select">
                                        <select name="by">
                                            <option value="0" selected>Купить</option>
                                            <option value="1">Снять</option>
                                        </select>
                                        <i></i>
                                    </label>
                                </div>
                                <div class="section span2">
                                    <label class="select">
                                        <select name="type">
                                            <option value="0" selected>Квартиру</option>
                                            <option value="1">Комнату</option>
                                            <option value="2">Дом</option>
                                            <option value="3">Участок</option>
                                        </select>
                                        <i></i>
                                    </label>
                                </div>
                                <div class="section span3">
                                    <label class="select">
                                        <select name="rooms">
                                            <option value="0" selected disabled>Комнат</option>
                                            <option value="1">Студия</option>
                                            <option value="2">Одна</option>
                                            <option value="3">Две</option>
                                            <option value="4">Три</option>
                                            <option value="5">Четыре</option>
                                            <option value="6">Пять и более</option>
                                            <option value="7">Свободная планировка</option>
                                        </select>
                                        <i></i>
                                    </label>
                                </div>
                                <div class="section span5">
                                    <label class="input">
                                        <input type="text" name="lastname" placeholder="Last name">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="pf_footer">
                            <button type="submit" class="button primary right">Найти</button>
                        </div>
                    </form>--}}
                </div>
                <div class="separator"></div>
            </div>
        </div>
    </div>
</section>
<main>
    <div class="container">
        <div class="row">
            <div class="col-md-8 content">
                <article class="property-item">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-5">
                                    <img src="{!! asset('images/demo.jpg') !!}" class="img-post img-responsive" alt="Image">
                                </div>
                                <div class="col-lg-7 post-content">
                                    <h4 class="post-title"><a href="#" class="transicion">Продам, Квартира 1к, Киев, Печерский район</a></h4>
                                    <p>С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации.</p>
                                    <p>Товарищи! дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий. </p>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer post-info-b">
                            <div class="row">
                                <div class="col-lg-12">
                                    <i class="fa fa-clock-o"></i> 20 января 2017 <i class="fa fa-user"></i> Хозяин
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="property-item">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-5">
                                    <img src="{!! asset('images/demo2.jpg') !!}" class="img-post img-responsive" alt="Image">
                                </div>
                                <div class="col-lg-7 post-content">
                                    <h4 class="post-title"><a href="#" class="transicion">Продам, Квартира 1к, Днепропетровск, Бабушкинский район</a></h4>
                                    <p>Срочная продажа,Однокомнатная квартира в Центре на Комсомольской -хорошее место разположение дома с шаговой доступностью к инфраструктуре города.Дом после капитального ремонта.Екатеринка с ж/б перекрытием,кирпич толщиной несущих стен 1метр.МПО с решотками на окнах с выходом на Комсомольскую.Состояние квартиры жилое.Современный газовый котел-круглый год горячая вода.С/у совмещен.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer post-info-b">
                            <div class="row">
                                <div class="col-lg-12">
                                    <i class="fa fa-clock-o"></i> 20 января 2017 <i class="fa fa-user"></i> Хозяин
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="property-item">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-5">
                                    <img src="{!! asset('images/demo3.jpg') !!}" class="img-post img-responsive" alt="Image">
                                </div>
                                <div class="col-lg-7 post-content">
                                    <h4 class="post-title"><a href="#" class="transicion">Продам, Квартира 1к, Ирпень, Киевская обл., Киево-Святошинский район</a></h4>
                                    <p>С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации.</p>
                                    <p>Товарищи! дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий. </p>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer post-info-b">
                            <div class="row">
                                <div class="col-lg-12">
                                    <i class="fa fa-clock-o"></i> 20 января 2017 <i class="fa fa-user"></i> Хозяин
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-md-4">
                <aside class="sidebar">
                    <div class="block">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#" data-toggle="tab" aria-expanded="true"><i class="fa fa-star"></i></a></li>
                            <li><a href="#" data-toggle="tab" aria-expanded="false"><i class="fa fa-folder-open"></i></a></li>
                            <li><a href="#" data-toggle="tab" aria-expanded="false"><i class="fa fa-clock-o"></i></a></li>
                            <li><a href="#" data-toggle="tab" aria-expanded="false"><i class="fa fa-tags"></i></a></li>
                        </ul>
                        <div class="block-wraper-with-nav">
                            <div class="block-heading">
                                <h4>Aside section #1</h4>
                            </div>
                            <div class="block-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atomus, appellat dedocendi omnes quoddam atomos. Vestra. Corrupti sensum multa dissentiet uberius displicet medeam, efficiatur quaeque saluto sollicitare arbitraretur conectitur chaere, deorum consiliisque arbitrer doctrina nasci. Odia malis, scipio, libido. Iudico graviter seditione hoc. Venustate.</p>
                            </div>
                        </div>
                     </div>

                    <div class="block">
                        <div class="block-wraper">
                            <div class="block-heading">
                                <h4>Aside section #2</h4>
                            </div>
                            <div class="block-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atomus, appellat dedocendi omnes quoddam atomos. Vestra. Corrupti sensum multa dissentiet uberius displicet medeam, efficiatur quaeque saluto sollicitare arbitraretur conectitur chaere, deorum consiliisque arbitrer doctrina nasci. Odia malis, scipio, libido. Iudico graviter seditione hoc. Venustate.</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</main>
<footer id="main-footer">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <ul class="nav footer-menu">
                        <li><i class="fa fa-plus-square-o"></i> <a href="#">Регистрация</a></li>
                        <li><i class="fa fa-rss-square"></i> <a href="#">Rss Ленты</a></li>
                        <li><i class="fa fa-newspaper-o"></i> <a href="#">Рассылка на e-mail</a></li>
                        <li><i class="fa fa-sitemap"></i> <a href="#">Карта сайта</a></li>
                        <li class="red"><i class="fa fa-bullhorn"></i> <a title="Сообщить об ошибке на сайте" href="#">Сообщить об ошибке</a></li>
                    </ul>
                </div>
                <div class="col-md-5">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>&copy; where.com.ua, 2016 - 2017.<br>
                        Копирование и размещение материалов на других сайтах разрешается только с обратной гиперссылкой.
                    </p>
                </div>
            </div>
        </div>
    </section>

</footer>
</body>
</html>