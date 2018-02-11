​
580
    if (options.pulseNormalize == 1) {
581
        options.pulseNormalize /= pulse_(1);
582
    }
583
    return pulse_(x);
584
}
585
​
586
​
587
​
588
var userAgent = window.navigator.userAgent;
589
var isEdge    = /Edge/.test(userAgent); 
590
var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
591
var isSafari  = /safari/i.test(userAgent) && !isEdge; 
592
var isMobile  = /mobile/i.test(userAgent);
593
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
594
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
595
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
596
​
597
var wheelEvent;
598
if ('onwheel' in document.createElement('div'))
599
    wheelEvent = 'wheel';
600
else if ('onmousewheel' in document.createElement('div'))
601
    wheelEvent = 'mousewheel';
602
​
603
if (wheelEvent && isEnabledForBrowser) {
604
    addEvent(wheelEvent, wheel);
605
    addEvent('mousedown', mousedown);
606
    addEvent('load', init);
607
}
608
​
609
​
610
​
611
function SmoothScroll(optionsToSet) {
612
    for (var key in optionsToSet)
613
        if (defaultOptions.hasOwnProperty(key)) 
614
            options[key] = optionsToSet[key];
615
}
616
SmoothScroll.destroy = cleanup;
617
​
618
if (window.SmoothScrollOptions) 
619
    SmoothScroll(window.SmoothScrollOptions);
620
​
621
if (typeof define === 'function' && define.amd)
622
    define(function() {
623
        return SmoothScroll;
624
    });
625
else if ('object' == typeof exports)
626
    module.exports = SmoothScroll;
627
else
628
    window.SmoothScroll = SmoothScroll;
629
​
630
})();