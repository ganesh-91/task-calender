function callData() {
    const dataPromise = new Promise(function (resolve, reject) {
        fetch('https://e-to-e.herokuapp.com/getCountdown/ ')
            .then(function (response) {
                response.json()
                    .then(function (data) {
                        resolve(data.data);
                    });
            })
            .catch(function (err) {
                reject('error found', err);
                console.log('error found', err);
            });

    });


    dataPromise.then
        (function (resp) {
            var parentElm = document.getElementById("container");
            for (let i = 0; i < resp.length; i++) {
                var date = resp[i].date.split('-');
                var card = document.createElement("div");
                card.setAttribute('class', 'card text-center');
                // card.setAttribute('id', 'card');
                var heading = document.createElement("h1");
                heading.innerHTML = date[0];
                card.appendChild(heading);
                var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                var mon = document.createElement('p');
                mon.innerHTML = month[date[1] - 1];
                card.appendChild(mon);
                parentElm.append(card);
                var txtMsg=resp[i].text_msg;
                card.setAttribute('onClick', 'callModal("'+txtMsg+'")');
            }
        })
    }

function callModal(element) {
    //var txtMsg = element.lastChild.defaultValue;
    var modalContent= document.querySelector('.txt-msg');
    modalContent.innerHTML = element;
    document.querySelector('.bg-modal').style.display='flex';
}
function closeModal(){
    document.querySelector('.bg-modal').style.display='none';
}

window.onload=callData();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "./img/sstar.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
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
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
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