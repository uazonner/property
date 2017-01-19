<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Property Project</title>

    <link rel="stylesheet" type="text/css" href="{!! asset('css/style.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap-theme.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/font-awesome.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/slicknav.css') !!}" />

    <script src="{!! asset('js/jquery.min.js') !!}"></script>
    <script src="{!! asset('js/script.js') !!}"></script>
    <script src="{!! asset('js/bootstrap.min.js') !!}"></script>
    <script src="{!! asset('js/jquery.slicknav.min.js') !!}"></script>
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
                        <li class="first active"><a href="#">Новостройки</a></li>
                        <li><a href="#">Застройщики</a></li>
                        <li><a href="#">Спецпредложения</a></li>
                        <li><a href="#">Аналитика</a></li>
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

</section>
<main>
    <div class="container">
        <div class="row">
            <div class="col-md-8 content"><h4>Main content</h4></div>
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
    <div class="container">
        <p>&copy; where.com.ua, 2016 - 2017.<br>
            Копирование и размещение материалов на других сайтах разрешается только с обратной гиперссылкой.
        </p>
    </div>
</footer>
</body>
</html>