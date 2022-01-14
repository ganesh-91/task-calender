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
                var input = document.createElement("input");
                input.setAttribute('type', 'hidden')
                input.setAttribute('value', resp[i].text_msg);
                card.appendChild(input);
                card.setAttribute('onClick', 'callModal(this)')
            }
        })
    }

function callModal(element) {
    var txtMsg = element.lastChild.defaultValue;
    var modalContent= document.querySelector('.txt-msg');
    modalContent.innerHTML = txtMsg;
    document.querySelector('.bg-modal').style.display='flex';
}
function closeModal(){
    document.querySelector('.bg-modal').style.display='none';
}

window.onload=callData();