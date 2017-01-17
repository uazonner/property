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
    <!-- Site info -->
    <div class="container">
        <div class="site-info">
            <div class="slogan">Недвижимость Украины</div>
            <div class="site-name"><a href="#">Real.kh.ua</a></div>
        </div>
    </div>
    <!-- Navigation -->
    <nav>
        <div class="container">


            <div class="navigation">

                <ul id="menu" class="hidden-xs hidden-sm responsive-menu">
                    <li class="first active"><a href="#">Новостройки</a></li>
                    <li><a href="#">Застройщики</a></li>
                    <li><a href="#">Спецпредложения</a></li>
                    <li><a href="#">Аналитика</a></li>
                </ul>
            </div>


        </div>
        {{--<!-- Mobile Nav -->
        <div class="navigation-mobile visible-xs">
            <div class="site-info-mobile">
                <a class="slogan-mobile" href="#">Недвижимость Украины</a>
                <a class="site-name-mobile" href="#">Realty.com.ua</a>
            </div>

            <button type="button" id="menu-toggle" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-exampl2e">
                <span class="sr-only">Toggle navigation</span>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>

            <button type="button" id="user-toggle" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example">
                <span class="sr-only">Toggle navigation</span>
                <i class="fa fa-user-o" aria-hidden="true"></i>
            </button>
        </div>--}}
    </nav>
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