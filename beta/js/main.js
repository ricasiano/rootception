
$(function() {
    $('html').click(function() {
        $('#shell').focus();
    });
});
angular.module('App', ['ngSanitize']).controller('Controller', ['$scope', 
    function ngBindHtmlCtrl($scope) {
        $scope.containertext = '';
        $scope.update = function(shell) {
            if (shell !== undefined) {
                var shellprompt = shell.prompt.split(' ');
                shellprompt[0] = shellprompt[0].replace(/[^a-z0-9\.\/\ ]/gi, '');
                switch (shellprompt[0]) {
                    case '':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        $scope.containertext += '<div class="oldshell">[guest@rootception ~] $</div>';
                        break;
                    case 'su':
                        $('.shellcontainer').hide();
                        $('.passwordcontainer').show();
                        $('#shell').get(0).type='password';
                        break;
                    case 'clear':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        $scope.containertext = '';
                        break;
                    case 'cat':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        if (shellprompt[1] !== undefined) {
                            shellprompt[1] = shellprompt[1].replace(/[^a-z0-9\.\/ ]/gi, '');
                            $scope.containertext += shellcat(shellprompt[1]);
                        }
                        else {
                            $scope.containertext += shellcat('');
                        }
                        break;
                    case 'ver':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        $scope.containertext += shellver();
                        break;
                    case 'service':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        if (shellprompt[1] !== undefined) {
                            shellprompt[1] = shellprompt[1].replace(/[^a-z0-9\.\/ ]/gi, '');
                            $scope.containertext += shellservice(shellprompt[1]);
                        }
                        else {
                            $scope.containertext += shellservice('');
                        }
                        break;
                    case 'cd':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        if (shellprompt[1] !== undefined) {
                            shellprompt[1] = shellprompt[1].replace(/[^a-z0-9\.\/ ]/gi, '');
                            $scope.containertext += shellcd(shellprompt[1]);
                        }
                        else {
                            $scope.containertext += shellcd('');
                        }
                        break;
                    case 'ls':
                    case 'll':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        $scope.containertext += shellls();
                        break;
                    case 'help':
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        if (shellprompt[1] !== undefined) {
                            shellprompt[1] = shellprompt[1].replace(/[^a-z0-9\.\/ ]/gi, '');
                            $scope.containertext += shellhelp(shellprompt[1]);
                        }
                        else {
                            $scope.containertext += shellhelp('');
                        }
                        break;
                        case rootpassword:
                            $scope.containertext += shellaccess();
                            $scope.containertext += '<br /><br />The server hung up expectedly because you are such a hacker!';
                            $('.passwordcontainer').hide();
                            $('.shellcontainer').hide();
                            $('#shell').hide();
                        break;
                    default:
                        $('.shellcontainer').show();
                        $('.passwordcontainer').hide();
                        $('#shell').get(0).type='text';
                        $scope.containertext += '<div class="oldshell">[guest@rootception ~] $ ' + shellprompt[0] + '</div>';
                        $scope.containertext += '<div class="oldshell">' + shellprompt[0] + ': command not found</div>';
                        break;
                }
                document.location = '#endterminal';
                shell.prompt = '';
            }
            else {
                $('.shellcontainer').show();
                $('.passwordcontainer').hide();
                $('#shell').get(0).type='text';
                $scope.containertext += '<div class="oldshell">[guest@rootception ~] $</div>';
            }
        };
    }
]);

function boot() {
    $('#consoleboot').append('Loading...<br />');
    setTimeout(function() {
        $('#consoleboot').append('Still loading...<br />');
        setTimeout(function() {
            $('#consoleboot').hide();
            $('#consolecontent').show();
        }, 3000);

    }, 3000);
}
