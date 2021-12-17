interface jQuery {
    (selector: string): HTMLElement;
    version: number;
    year: number
}


var $ = <jQuery>function(selector: string) {
    // Find DOM element
}

$.version = 1.18;
$.year = 2021;

var container = $('#container');
