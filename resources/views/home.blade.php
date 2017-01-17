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
                <div class="site-name"><a href="#">Real.kh.ua</a></div>
            </div>

            <div class="tracker">
                <a href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i>
                    2 Апреля 2017, 20:46
                </a>
            </div>
        </div>

        <div class="nav">
            <div class="row-top">
                <div class="secondary-menu">
                    <ul id="user-menu">
                        <li class="first"><a href="#">Личный кабинет</a></li>
                        <li><a href="#">Регистрация</a></li>
                    </ul>
                </div>
                <div class="search hidden-xs hidden-sm responsive-menu">
                    Здесь будет поиск
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
<main>
    <div class="container">

            <div class="col-lg-9 col-md-9 content">Центр</div>
            <div class="col-lg-3 col-md-3 sidebar">Правый блок</div>

    </div>
</main>
</body>
</html>