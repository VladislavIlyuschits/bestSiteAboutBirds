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