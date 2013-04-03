'use strict';


N.wire.on('io.error', function (err) {
  if (N.io.ECOMMUNICATION === err.code) {
    N.wire.emit('notify', { type: 'error', text: t('errors.communication') });
    return;
  }

  if (N.io.EWRONGVER === err.code) {
    N.wire.emit('notify', { type: 'error', text: t('errors.version') });
    return;
  }
});


$(function () {
  // Attach tooltip handler to matching elements
  $('._tip').tooltip();

  //
  // Social buttons defered load - after all
  //

  setTimeout(function () {
    function injectScript(src, async, id) {
      var el, script;

      if (id && document.getElementById(id)) {
        return;
      }

      el = document.createElement('script');

      el.id    = id;
      el.type  = 'text/javascript';
      el.async = async;
      el.src   = src;

      script = document.getElementsByTagName('script')[0];
      script.parentNode.insertBefore(el, script);
    }

    // Twitter buttons
    injectScript('//platform.twitter.com/widgets.js', false, 'twitter-wjs');

    // Google +1
    injectScript('https://apis.google.com/js/plusone.js', true);
  }, 2000);
});
