<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Property Project</title>

    <link rel="stylesheet" type="text/css" href="{!! asset('css/style.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap-theme.min.css') !!}" />
    <link rel="stylesheet" type="text/css" href="{!! asset('css/font-awesome.min.css') !!}" />

    <script src="{!! asset('js/jquery.min.js') !!}"></script>
    <script src="{!! asset('js/script.js') !!}"></script>
    <script src="{!! asset('js/bootstrap.min.js') !!}"></script>
</head>
<body>
    <div id="header">
        <header id="headerfull">
            <div class="container">
                <div id="site-info">
                    <div class="slogan">Недвижимость Украины</div>
                    <div class="site-name"><a href="#">Real.kh.ua</a></div>
                </div>
            </div>
        </header>
        <nav id="navigationfull">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" id="menu-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="fa fa-bars"></i>
                    </button>
                    <div class="mobile-site-info">
                        <a class="slogan-mobile hidden-lg hidden-md hidden-sm" href="#">Недвижимость Украины</a>
                        <a class="site-name-mobile hidden-lg hidden-md hidden-sm" href="#">Real.kh.ua</a>
                    </div>
                    <button type="button" id="user-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <i class="fa fa-user-o"></i>
                    </button>
                </div>



                <div class="tracker">
                    <a class="main-nav-link" href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i>
                        2 Апреля 2017, 20:46
                    </a>
                </div>
                <div class="primary">
                    <ul>
                        <li class="active"><a href="#">Главная <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Недвижимость <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="#">Статьи <i class="fa fa-angle-down"></i></a></li>
                    </ul>
                </div>
            </div>


        </nav>
    </div>
</body>
</html>