function shellcat(param) {
    param = param.trim();
    var containertext = '';
    switch (param) {
        case 'skills.txt':
            containertext += '<div class="oldshell">[guest@rootception ~] $ cat skills.txt</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;Here are my current skillset:</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734; php</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734;&#9734;&#9734;&#9734; perl</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734;&#9734;&#9734;&#9734;&#9734; python</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734; mysql</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734;&#9734; postgresql</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734;&#9734; javascript</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;&#9734; asterisk</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;To know more about my skills, type: <b>service skillset status</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;i.e. service <b>php</b> status</div>';
            break;
        case 'projects.txt':
            containertext += '<div class="oldshell">[guest@rootception ~] $ cat projects.txt</div>';
            containertext += '<div class="oldshell">Here are my current projects:</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;<b>restapi</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Pragmatic REST API implementation</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;<b>shutterbox</b>&nbsp;&nbsp;&nbsp;A facebook-like chat interface</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;<b>gencms</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A content management system</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;To know more about my projects, type: <b>service project status</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;i.e. service <b>restapi</b> status</div>';
            break;
            
        case 'services.txt':
            containertext += '<div class="oldshell">[guest@rootception ~] $ cat services.txt</div>';
            containertext += '<div class="oldshell">Currently accepting small projects:</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;Web-Based Projects</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;Asterisk Projects</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;Phonegap Projects</div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;For my contact info, type: <b>ver</b></div>';
            break;
        case '':
            containertext += '<div class="oldshell">[guest@rootception ~] $ cat </div>';
            containertext += '<div class="oldshell">cat: No page supplied to be opened</div>';
            break;
        default:
            containertext += '<div class="oldshell">[guest@rootception ~] $ cat '+param+'</div>';
            containertext += '<div class="oldshell">cat: '+param+': No such file or directory</div>';
            break;
    }
    return containertext;
}