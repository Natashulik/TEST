export function sendForm() {
    const name = document.querySelector(".input_name").value;
    const email = document.querySelector(".input_email").value;
    const phone = document.querySelector(".input_phone").value;
    const message = document.querySelector(".textarea").value;

     const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    console.log(data);

    fetch('http://example.com/api/form', {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json()) 
        .then(result => { 
            if (result.status === 'error') { 
                for (let field in result.fields) {
                    console.log(`В поле ${field} ошибка ${field.inputName}`);
                }
            } else if (result.status === 'success') { 
                 console.log(result.msg);
            }
        })
        .catch(error => console.log(error)); 
    }