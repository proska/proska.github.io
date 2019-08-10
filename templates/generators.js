// Import the jquery
// var script = document.createElement('script');
// script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);


function populate_header() {
    var header = document.getElementById('main_header')

    var page_name = window.location.pathname.split("/").pop();

    const top_div = "<div class=\"header_content d-flex flex-row align-items-center justify-content-start\">\n" +
        "\t\t\t<div class=\"logo\"><nobr>Eric (<span>Ehsan</span>) Qasemi</nobr></div>\n";

    var header_items = [["index.html", "About"], ["skills.html", "Skills"], ["education.html", "Education"],
        ["research.html", "Research"], ["experience.html", "Experience"], ["teaching.html", "Teaching"],
        // ["services.html", "Services"]
    ]

    function generate_header_string() {
        return "\t\t\t<div class=\"main_nav d-flex flex-row align-items-end justify-content-start\">\n" +
            "\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
            header_items.map(function(item) {
                var active = "";
                if (page_name === item[0]){
                    active = " class=\"active\"";
                }
                return '\t\t\t\t\t<li'+active+'><a href=\"'+item[0]+'\">'+item[1]+'</a></li>\n';
            }) +
            "\t\t\t\t</ul>\n" +
            "\t\t\t</div>\n";
    }

    function generate_menu_string() {
        return "\t\t\t<div class=\"menu\">\n" +
            "\t\t\t\t<div class=\"menu_content d-flex flex-row align-items-start justify-content-end\">\n" +
            "\t\t\t\t\t<div class=\"hamburger ml-auto\">menu</div>\n" +
            "\t\t\t\t\t<div class=\"menu_nav text-right\">\n" +
            "\t\t\t\t\t\t<ul>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"index.html\">About</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"skills.html\">Skills</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"education.html\">Education</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"services.html\">Research</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"experience.html\">Experience</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"teaching_template.html\">Teaching</a></li>\n" +
            "\t\t\t\t\t\t\t<li><a href=\"services.html\">Services</a></li>\n" +
            "\t\t\t\t\t\t</ul>\n" +
            "\t\t\t\t\t</div>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t</div>\n";
    }

    var all_str = top_div +
        generate_header_string(name) +
        generate_menu_string() +
        "\t\t</div>"


    // header.innerHTML = topdiv + logo + head + menu + botdiv
    header.innerHTML = all_str
}

function populate_general_info() {
    var s = "<div>\n" +
        "\t\t\t\t\t<div class=\"general_info_image\">\n" +
        "\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/me.jpg)\"></div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"general_info_content\">\n" +
        "\t\t\t\t\t<div class=\"general_info_content_inner mCustomScrollbar\" data-mcs-theme=\"minimal-dark\">\n" +
        "\t\t\t\t\t\t<div class=\"general_info_title\">General Information</div>\n" +
        "\t\t\t\t\t\t<ul class=\"general_info_list\">\n" +
        "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_3.png\"></div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_text\"><a href=\"mailto:qasemi.ehs@gmail.com\">qasemi.ehs@gmail.com</a></div>\n" +
        "\t\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_4.png\"></div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_text\">+1 608 571 8947</div>\n" +
        "\t\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_5.png\"></div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_text\"><a href=\"ehsanqasemi.com\">ehsanqasemi.com</a></div>\n" +
        "\t\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t</ul>\n" +
        "\n" +
        "\t\t\t\t\t\t<!-- Social -->\n" +
        "\t\t\t\t\t\t<div class=\"social_container\">\n" +
        "\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justify-content-start\">\n" +
        "\t\t\t\t\t\t\t\t<li><a href=\"https://github.com/proska\"><i aria-hidden=\"true\" class=\"fa fa-github\"></i></a></li>\n" +
        "\t\t\t\t\t\t\t\t<li><a href=\"https://www.linkedin.com/in/ehsan-qasemi-39627477/\"><i aria-hidden=\"true\" class=\"fa fa-linkedin\"></i></a></li>\n" +
        "\t\t\t\t\t\t\t\t<li><a href=\"https://twitter.com/Proska_\"><i aria-hidden=\"true\" class=\"fa fa-twitter\"></i></a></li>\n" +
        "\t\t\t\t\t\t\t</ul>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>"

    var general_info = document.getElementById('general_information')
    general_info.innerHTML = s
}

function populate_research_info(name='General Information', image="images/brain_image.jpg") {
    var s = "<div>\n" +
        "\t\t\t\t\t<div class=\"general_info_image\">\n" +
        "\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url("+image+")\"></div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"general_info_content\">\n" +
        "\t\t\t\t\t<div class=\"general_info_content_inner mCustomScrollbar\" data-mcs-theme=\"minimal-dark\">\n" +
        "\t\t\t\t\t\t<div class=\"general_info_title\">"+name+"</div>\n" +
        "\t\t\t\t\t\t<ul class=\"general_info_list\">\n" +
        "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_3.png\"></div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"general_info_text\"><a href=\"mailto:qasemi.ehs@gmail.com\">qasemi.ehs@gmail.com</a></div>\n" +
        "\t\t\t\t\t\t\t</li>\n" +
        // "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        // "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_4.png\"></div>\n" +
        // "\t\t\t\t\t\t\t\t<div class=\"general_info_text\">+1 608 571 8947</div>\n" +
        // "\t\t\t\t\t\t\t</li>\n" +
        // "\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n" +
        // "\t\t\t\t\t\t\t\t<div class=\"general_info_icon d-flex flex-column align-items-start justify-content-center\"><img alt=\"\" src=\"images/icon_5.png\"></div>\n" +
        // "\t\t\t\t\t\t\t\t<div class=\"general_info_text\"><a href=\"ehsanqasemi.com\">ehsanqasemi.com</a></div>\n" +
        // "\t\t\t\t\t\t\t</li>\n" +
        // "\t\t\t\t\t\t</ul>\n" +
        "\n" +
        "\t\t\t\t\t\t<!-- Social -->\n" +
        // "\t\t\t\t\t\t<div class=\"social_container\">\n" +
        // "\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justify-content-start\">\n" +
        // "\t\t\t\t\t\t\t\t<li><a href=\"https://github.com/proska\"><i aria-hidden=\"true\" class=\"fa fa-github\"></i></a></li>\n" +
        // "\t\t\t\t\t\t\t\t<li><a href=\"https://www.linkedin.com/in/ehsan-qasemi-39627477/\"><i aria-hidden=\"true\" class=\"fa fa-linkedin\"></i></a></li>\n" +
        // "\t\t\t\t\t\t\t\t<li><a href=\"https://twitter.com/Proska_\"><i aria-hidden=\"true\" class=\"fa fa-twitter\"></i></a></li>\n" +
        // "\t\t\t\t\t\t\t</ul>\n" +
        // "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>"

    var general_info = document.getElementById('research_information')
    general_info.innerHTML = s
}

// function generate_header(name="About") {
//     var s = '\t\t\t<div class="main_nav d-flex flex-row align-items-end justify-content-start">\n' +
//         '\t\t\t\t<ul class="d-flex flex-row align-items-center justify-content-start">\n' +
//         '\t\t\t\t\t<li><a href="index.html">About</a></li>\n' +
//         '\t\t\t\t\t<li><a href="skills.html">Skills</a></li>\n' +
//         '\t\t\t\t\t<li class="active"><a href="education.html">Education</a></li>\n' +
//         '\t\t\t\t\t<li><a href="research.html">Research</a></li>\n' +
//         '\t\t\t\t\t<li><a href="experience.html">Experience</a></li>\n' +
//         '\t\t\t\t\t<li><a href="teaching_template.html">Teaching</a></li>\n' +
//         '\t\t\t\t\t<li><a href="services.html">Services</a></li>\n' +
//         '\t\t\t\t</ul>\n' +
//         '\t\t\t</div>'
//
//
//     var header_items = [["index.html", "About"], ["skills.html", "Skills"], ["education.html", "Education"],
//         ["research.html", "Research"], ["experience.html", "Experience"], ["teaching_template.html", "Teaching"],
//         ["services.html", "Services"]
//     ]
//     var ps =
//         '<div class="main_nav d-flex flex-row align-items-end justify-content-start">\n' +
//         '    <ul class="d-flex flex-row align-items-center justify-content-start">\n' +
//         header_items.map(function(item) {
//             var active = "";
//             if (name === item[1]){
//                 active = "class=\"active\"";
//             }
//             return '        <li'+active+'><a href=\"'+item[0]+'\">'+item[1]+'</a></li>\n';
//         })+
//         '    </ul>\n' +
//         '</div>';
//     // alert(ps)
//
//     // createElementFromHTML(s)
//
//     return ps;
//     // alert(header_items.entries())
// }
//
// function createElementFromHTML(htmlString) {
//     var header = document.createElement('header');
//     header.className = "header"
//     header.innerHTML = htmlString.trim();
//
//     // Change this to div.childNodes to support multiple top-level nodes
//     return header.firstChild;
// }