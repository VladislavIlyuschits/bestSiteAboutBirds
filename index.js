let images = {
  'Grodno': 'img/hrodno.jpeg',
  'Vitebsk': 'img/vitebsk.jpg',
  'Minsk': 'img/minsk.jpg',
  'Mir': 'img/mir.jpg',
  'Mohilev': 'img/mohilev.jpg',
  'Brest': 'img/brest.jpg',
  'Nicca': 'img/nicca.jpg',
  'Bordo': 'img/bordo.jpg',
  'Lille': 'img/lille.jpg',
  'Paris': 'img/paris.jpg',
  'Nant': 'img/nant.jpg',
  'Lyon': 'img/lyon.jpg',
  'Rome': 'img/rome.jpg',
  'Turin': 'img/turin.jpg',
  'Milan': 'img/milan.jpg',
  'Venice': 'img/venice.jpg',
  'Florence': 'img/florence.jpg',
  'Naples': 'img/naples.jpg',
  'Moscow': 'img/moscow.jpg',
  'Saint Petersburg': 'img/piter.jpg',
  'Omsk': 'img/omsk.jpeg',
  'Kaliningrad': 'img/kaliningrad.jpg',
  'Smolensk': 'img/smolensk.jpg',
  'Tomsk': 'img/tomsk.jpg',
};
let texts = {
  'Grodno': 'text for Grodno',
  'Vitebsk': 'text for Vitebsk',
  'Minsk': 'text for Minsk',
  'Mir': 'text for Mir',
  'Mohilev': 'text for Mohilev',
  'Brest': 'text for Brest',
  'Nicca': 'text for Nicca',
  'Bordo': 'text for Bordo',
  'Paris': 'text for Paris',
  'Lille': 'text for Lille',
  'Nant': 'text for Nant',
  'Lyon': 'text for Lyon',
  'Rome': 'text for Rome',
  'Turin': 'text for Turin',
  'Milan': 'text for Milan',
  'Venice': 'text for Venice',
  'Florence': 'text for Florence',
  'Naples': 'text for Naples',
  'Moscow': 'text for Moscow',
  'Saint Petersburg': 'text for Saint Petersburg',
  'Omsk': 'text for Omsk',
  'Kaliningrad': 'text for Kaliningrad',
  'Smolensk': 'text for Smolensk',
  'Tomsk': 'text for Tomsk',
};

$('#exampleModal').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget);
  let city = button.data('city');
  let modal = $(this);
  modal.find('.modal-title').text(city);
  let body = modal.find('.modal-body');
  body.empty();
  body.append(`<img style="max-width: 100%" src="${images[city]}"></img>`);
  body.append(`<p>${texts[city]}</p>`);
});