function shellhelp(param) {
    param = param.trim();
    var containertext = '';
    switch (param) {

        case 'ls':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help ls</div>';
            containertext += "<div class=\"oldshell\">usage: <b>ls</b></div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;Shows all pages for this site.</div>";
            break;

        case 'cat':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help cat</div>';
            containertext += "<div class=\"oldshell\">usage: cat <b>filename</b></div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;Show all page contents. Use <b>ls</b> to get all pages.</div>";
            break;
            
        case 'service':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help service</div>';
            containertext += "<div class=\"oldshell\">usage: service <b>skillset</b> status</div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;Show all page contents. Use <b>ls</b> to get all pages.</div>";
            break;
        case 'ver':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help ver</div>';
            containertext += "<div class=\"oldshell\">just type <b>ver</b></div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;Show info about this site.</div>";
            break;

        case 'cd':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help cd</div>';
            containertext += "<div class=\"oldshell\">just type <b>cd</b></div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;You never listen.</div>";
            break;

        case 'su':
            containertext = '<div class="oldshell">[guest@rootception ~] $ help su</div>';
            containertext += "<div class=\"oldshell\">just type <b>su</b></div>";
            containertext += "<div class=\"oldshell\">&nbsp;&nbsp;&nbsp;&nbsp;Wow.</div>";
            break;
        default:
            containertext = '<div class="oldshell">[guest@rootception ~] $ help</div>';
            containertext += "<div class=\"oldshell\">Type 'help <b>command</b>' to show detailed help</div>";
            containertext += '<div class="oldshell">Available commands:</div>';
            containertext += '<div class="oldshell"><b>ls</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; list all pages that can be accessible in this site</div>';
            containertext += '<div class="oldshell"><b>clear</b>&nbsp;&nbsp;&nbsp;&nbsp; clears the site\'s terminal screen</div>';
            containertext += '<div class="oldshell"><b>cat</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; view a specific page</div>';
            containertext += '<div class="oldshell"><b>ver</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; show info about this site</div>';
            containertext += '<div class="oldshell"><b>cd</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nope you can\'t do that</div>';
            containertext += '<div class="oldshell"><b>service</b>&nbsp;&nbsp; get more info about the current skillset or project</div>';
            containertext += '<div class="oldshell"><b>su</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; well if you snoop around at the back you might get lucky</div>';
            break;
    }
    return containertext;
}
