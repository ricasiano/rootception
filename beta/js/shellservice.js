function shellservice(param) {
    param = param.trim();
    var containertext = '';
    switch (param) {
        case 'php':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service php status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>PHP</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frameworks used: Codeigniter, Laravel and CakePHP</div>';
            break;
        
        case 'perl':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service perl status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Perl</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primarily used for Asterisk\'s AGI Scripting</div>';
            break;
        
        case 'python':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service python status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Python</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added it here because of Monty Python. Currently starting to learn Django Framework.</div>';
            break;
            
        case 'mysql':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service mysql status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>MySQL</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Used basically on every PHP project.</div>';
            break;
        
        case 'postgresql':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service postgresql status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>PostgreSQL</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Used it one time on my previous project.</div>';
            break;
            
        case 'javascript':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service javascript status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Javascript</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JQuery Framework, starting to learn AngularJS and Backbone.js</div>';
            break;
            
        case 'asterisk':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service asterisk status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Asterisk</b></div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Setup and Connectivity test(packet analysis, network trace), load balancer implementation, usage monitoring and optimization, troubleshooting, god my head hurts.</div>';
            break;
            
        case 'restapi':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service restapi status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>RESTAPI</b> - a pragmatic REST API</div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a REST API implementation using PHP and MySQL following Apigee and Stormpath\'s definition.</div>';
            containertext += '<div class="oldshell"><b>LINK</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You may fork it at Github: <a href="https://github.com/ricasiano/restapi" target="_blank">https://github.com/ricasiano/restapi</a></div>';
            break;
        case 'shutterbox':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service shutterbox status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Shutterbox</b> - a facebook-like chat implementation</div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a chat implementation using PHP, Codeigniter and MySQL</div>';
            containertext += '<div class="oldshell"><b>LINK</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download it at Sourceforge <a href="http://sourceforge.net/projects/facebook-likech/" target="_blank">http://sourceforge.net/projects/facebook-likech/</a></div>';
            break;
        case 'gencms':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service gencms status</div>';
            containertext += '<div class="oldshell"><b>NAME</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>GenCMS</b> - a content management system</div>';
            containertext += '<div class="oldshell"><b>DESCRIPTION</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discontinued</div>';
            containertext += '<div class="oldshell"><b>LINK</b></div>';
            containertext += '<div class="oldshell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n/a</div>';
            break;    
        case '':
            containertext += '<div class="oldshell">[guest@rootception ~] $ service</div>';
            containertext += '<div class="oldshell">Usage: service <b>skill/projectname</b> status</div>';
            break;
        default:
            containertext += '<div class="oldshell">[guest@rootception ~] $ service '+param+'</div>';
            containertext += '<div class="oldshell">'+param+': unrecognized service</div>';
            break;
    }
    return containertext;
}










