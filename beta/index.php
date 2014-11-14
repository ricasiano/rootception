<!doctype html>
<html lang="en" ng-app="App">
    <head>
        <meta property="og:title" content="Rootception - Welcome /home/guest" />
        <meta property="og:url" content="http://rootception.com" />
        <meta property="og:image" content="http://rootception.com/fbicon.png"/>
        <meta property="og:site_name" content="rootception.com"/>
        <title>Rootception.com</title>
        <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
        <script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-46529590-1', 'rootception.com');
            ga('send', 'pageview');

        </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular-sanitize.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/shellcommon.js"></script>
        <script type="text/javascript" src="js/shellhelp.js"></script>
        <script type="text/javascript" src="js/shellls.js"></script>
        <script type="text/javascript" src="js/shellservice.js"></script>
        <script type="text/javascript" src="js/shellcat.js"></script>
        <script>
            //you are now considered the best hacker in the world!
            rootpassword = 'doge';
        </script>
        <link href='http://fonts.googleapis.com/css?family=Droid+Sans+Mono' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="css/main.css" />
    </head>
    <body onLoad="document.getElementById('shell').focus(); boot();">
        <div class="consoleboot" id="consoleboot"></div>
        <div class="consolecontent" id="consolecontent">
        <form novalidate>
            <div ng-controller="Controller" id="terminal">
                <div class="title">
                    __________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;.__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                    \______&nbsp;&nbsp;&nbsp;\&nbsp;____&nbsp;&nbsp;&nbsp;_____/&nbsp;&nbsp;|_&nbsp;&nbsp;____&nbsp;&nbsp;____&nbsp;_______/&nbsp;&nbsp;|_|__|&nbsp;____&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;<br />
                    &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_//&nbsp;&nbsp;_&nbsp;\&nbsp;/&nbsp;&nbsp;_&nbsp;\&nbsp;&nbsp;&nbsp;__\/&nbsp;___\/&nbsp;__&nbsp;\\____&nbsp;\&nbsp;&nbsp;&nbsp;__\&nbsp;&nbsp;|/&nbsp;&nbsp;_&nbsp;\&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;<br />
                    &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;<_>&nbsp;|&nbsp;&nbsp;<_>&nbsp;)&nbsp;&nbsp;|&nbsp;\&nbsp;&nbsp;\__\&nbsp;&nbsp;___/|&nbsp;&nbsp;|_>&nbsp;>&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;(&nbsp;&nbsp;<_>&nbsp;)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;\<br />
                    &nbsp;|____|_&nbsp;&nbsp;/\____/&nbsp;\____/|__|&nbsp;&nbsp;\___&nbsp;&nbsp;>___&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;__/|__|&nbsp;|__|\____/|___|&nbsp;&nbsp;/<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;&nbsp;&nbsp;&nbsp;\/|__|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;<br />
                </div>
                Welcome to my site. This is where I put my portfolios, skills and projects that I have done. Feel free to hack around!
                <br />
                <span class="note"><b>Note:</b></span> Don't want to get through this fancy command-line interface? Click <a href="home"><b>here</b></a>.
                <br />
                <br />
                Last login: <?php echo date('D M d H:i:s Y'); ?> from <?php echo $_SERVER['REMOTE_ADDR']; ?><br />
                You must be from <?php echo geoip_country_name_by_name($_SERVER['REMOTE_ADDR']); ?>
                <br /><br />
                Type '<b>help</b>' for command-line help.<br />
                <div class="consoleresponse" ng-bind-html="containertext"></div>
                <span class="shellcontainer">[guest@rootception ~] $ </span><span class="passwordcontainer">Password: </span><input type="text" class="shell" id="shell" ng-model="shell.prompt" maxlength="30" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" />
                
                <button ng-click="update(shell)" class="carriage">SAVE</button>
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <a name="endterminal"></a>
            </div> 
        </form>
        </div>
    </body>
</html>
