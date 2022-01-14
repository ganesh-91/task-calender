function populateDates(data) {
  let finalHTML = '', month = getMonth(data[0].date);
  for(let i=0; i<data.length; i++) {
    let day = data[i].date.substring(0, 2);
    let dateHTMLComponent = `
  <div
        class="date-card"
        data-message="${data[i].text_msg}"
        onclick="showModal(${i})"
        id="${i}"
        data-modal-target
      >
        <p>
          ${day}
        </p>
        <p class="font-semibold">${month}</p>
      </div>
  `;

  finalHTML += dateHTMLComponent;
  }
  document.getElementById('container').innerHTML = finalHTML;
}

fetch("https://e-to-e.herokuapp.com/getCountdown/")
  .then(data => data.json())
  .then(data => data.data)
  .then((data) => {populateDates(data)})
  .catch((err) => {
    document.getElementById(
      "App"
    ).innerHTML = `<h1>Something is wrong</h1><p>${err}</p>`;
  });

function showModal(id) {
  let msg = document.getElementById(id).dataset.message;
  document.getElementById('modal-message').innerHTML = msg;
  let modal = document.getElementById('modal');
  modal.classList.add('modal-active');
  let overlay = document.getElementById('overlay');
  overlay.classList.add('overlay-active');
}

function closeModal() {
  let modal = document.getElementById('modal');
  modal.classList.remove('modal-active');
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('overlay-active');
}

function getMonth(date) {
  let month = date.substring(3, 5);
  let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  if(month > 12 || month < 0)
    return 'UNKNOWN';
  return months[month - 1];
}

document.getElementById('close-button').addEventListener('click', closeModal);

// particlesJS.load('snow', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

particlesJS('snow', 
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FDE047"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "white"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 13,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  }
});

