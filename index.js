let images = {
  'Grodno': 'img/hrodno.jpeg',
  'Vitebsk': 'img/vitebsk.jpg',
  'Minsk': 'img/minsk.jpg',
  'Mir': 'img/mir.jpg',
  'Mohilev': 'img/mohilev.jpg',
  'Brest': 'img/brest.jpg',
};
let texts = {
  'Grodno': 'text for Grodno',
  'Vitebsk': 'text for Vitebsk',
  'Minsk': 'text for Minsk',
  'Mir': 'text for Mir',
  'Mohilev': 'text for Mohilev',
  'Brest': 'text for Brest',
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