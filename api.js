// console.log('hello');

  
        // // API for get requests
        // let fetchRes = fetch(
        // "https://e-to-e.herokuapp.com/getCountdown/");
  
        // // fetchRes is the promise to resolve
        // // it by using.then() method
        // fetchRes.then(res =>
        //     res.json()).then(d => {
        //         console.log(d)
        //     })

        // function getapi (){          

        //     url="https://e-to-e.herokuapp.com/getCountdown/"
        
        // fetch(url).then( (response)=>{
        
        
        
        //     return response.json();
        
        // }).then((data)=>{
        
        //     console.log(data);
        
        // })
        
        // }
        // getapi();
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
        console.log(dataPromise);

        // dataPromise.then(populateDates(dataPromise));

        function populateDates(data){
            console.log(data);
            let finalHTML = '',month = getMonth(data[0].date);
            console.log("Data: ",finalHTML);

            for(let i=0; i<data.length; i++){
                let day = data[i].date.substring(0,2);
                let dateHTMLComponent = `
                <div
                    class = "date"
                    data-message = "${data[i].text_msg}"
                    onclick = "showModel(${i})"
                    id = "${i}"
                    data-model-target
                >
                    <p>
                        ${day}
                    </p>
                    <p class = "font-semibold">${month}</p>
                </div>
                `;
                finalHTML = finalHTML + dateHTMLComponent;
            }
            console.log(finalHTML);
            document.getElementById('grid').innerHTML = finalHTML;
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
        
        function showModel(id){
            let msg = document.getElementById(id).dataset.message;
            document.getElementById('modal-message').innerHTML = msg;
            let modal = document.getElementById('modal');
            modal.classList.add('modal-active');
            let overlay = document.getElementById('overlay');
            overlay.classList.add('overlay-active');
        }

        function closeModal(){
            let modal = document.getElementById('modal');
            modal.classList.remove('modal-active');
            let overlay = document.getElementById('overlay');
            overlay.classList.remove('overlay-active');
        }
        document.getElementById('close-button').addEventListener("click",closeModal);

        function getMonth(date){
            let  month = date.substring(3,5);
            switch(month){
                case '01':
                    return 'JAN';
                case '02':
                    return 'FEB';
                case '03':
                    return 'MAR';
                case '04':
                        return 'APR';               
                case '05':
                        return 'MAY';
                case '06':
                        return 'JUN';                
                case '07':
                        return 'JUL';                
                case '08':
                        return 'AUG';                
                case '09':
                        return 'SEPT';                
                case '10':
                        return 'OCT';                
                case '11':
                        return 'NOV';                
                case '12':
                        return 'DEC';
            }
        }