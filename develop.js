function apiCall() {

  const myPromise = new Promise(function (resolve, reject) {
    fetch('https://e-to-e.herokuapp.com/getCountdown/')
      .then(function (response) {

        response.json()
          .then(function (data) {
            resolve(data.data);
          });
      })
      .catch(function (err) {
        reject('Fetch Error :-S', err);
        console.log('Fetch Error :-S', err);
      });
  });

  myPromise
    .then(function (resp) {
      var parentElm = document.getElementById("Container");
      for (let i = 0; i < resp.length; i++) {
        var card = document.createElement("div");
        card.setAttribute('class', 'card');

        var date = document.createElement("div");
        date.setAttribute('class', 'date');
        date.innerHTML = resp[i].date.split('-')[0];
        card.appendChild(date);


        var textMonth = document.createElement("div");
        textMonth.setAttribute('class', 'textMonth');
        var month_name = function (dt) {
          mlist = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG",
            "SEPT", "OCT", "NOV", "DEC"
          ];
          return mlist[dt.getMonth()];
        };

        textMonth.innerHTML = month_name(new Date(resp[i].date.split('-')[1]));
        card.appendChild(textMonth);
        parentElm.append(card);

        card.onclick = function () {
          var popupParent = document.getElementById("popup-parent");
          popupParent.style.display = "block";
          var popupContent = document.getElementById("popup-content");
          var popupId = document.getElementById("popup-id");
          popupId.innerHTML = resp[i].text_msg;
        }
      }
    })
    .catch((error) => {
      console.log('error', error)
    })
}
function myFunction() {
  var popupParent = document.getElementById("popup-parent");
  popupParent.style.display = "none";
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FFFF00"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 2,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
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
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



