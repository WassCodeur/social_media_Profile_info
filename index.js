function input_prenom(){
    let firstname = document.getElementById('firstname').value;
    let firstnameRequiert = document.getElementById('firstname_requiert')
    let prenomReGex = new RegExp('^[A-Z]{1}[a-z]+$','g')
    let testprenomReGex =prenomReGex.test(firstname)
    if(testprenomReGex ){
        firstnameRequiert.style.color = 'green'
        firstnameRequiert.innerHTML = 'Cool!'
        let strg2 = document.getElementById('strg2')
        strg2.innerHTML= firstname
    
    }else{
        firstnameRequiert.style.color = 'red'
        firstnameRequiert.innerHTML = 'Veuillez entrez votre prénom en débutant par une lettre majuscule'
    }
}

function input_nom(){
    let lastnameRequiert = document.getElementById('lastname_requiert')
    let name = document.getElementById('lastname').value;
    let nomReGex = new RegExp('^[A-Z]{2,45}$')
    let testnom = nomReGex.test(name)
    if(testnom){
        lastnameRequiert.style.color = 'green'
        lastnameRequiert.innerHTML= ' Coll!'
        let strg1 = document.getElementById('strg1')
        strg1.innerHTML= name
    }else{
        lastnameRequiert.style.color = 'red'
        lastnameRequiert.innerHTML = 'Veuillez entrez votre nom en majuscule'
    }
}

    function input_mail(){
        let emailRequiert = document.getElementById('email_requiert')
        let email = document.getElementById('email').value;
        let EmailReGex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g')
        let testemail = EmailReGex.test(email) 
        if(testemail){
            emailRequiert.style.color = 'green'
            emailRequiert.innerHTML = 'Coll!'
            let mail = document.getElementById('mail')
            mail.innerHTML= email
        }else{
            emailRequiert.style.color = 'red'
            emailRequiert.innerHTML = 'exemple : djon.do@exemple.com'
        }
    }

    function checkbox(){
        let Checbook_input = document.getElementById('status')
        if (document.getElementById('disponibility').checked==true ) {
            Checbook_input.innerHTML ='<div ><span class="status">&#128512; Disponible</span></div>' 
        }else{
            Checbook_input.innerHTML ='<div ><span class="status">&#128683; Non disponible</span></div>' 
        }   
        
    }
