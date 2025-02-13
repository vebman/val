$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  var envelope = $self.find('.envelope');
  var heart = $self.find('.heart use');
  var card = $self.find('.envelope__card');
  var text = $self.find('.text');

  if (!envelope.hasClass('open')) {
    envelope.removeClass('tossing').addClass('open');
    heart.attr("xlink:href", "#icon-heart-broken");
    card.addClass('open');
    setTimeout(function() {
      text.css({
        visibility: 'visible',
        opacity: 1 // З'являється текст
      });
    }, 500); // Затримка для синхронізації з анімацією
  } else {
    envelope.removeClass('open').addClass('tossing');
    heart.attr("xlink:href", "#icon-heart");
    card.removeClass('open');
    text.css({
      visibility: 'hidden',
      opacity: 0 // Текст зникає
    });
  }
});