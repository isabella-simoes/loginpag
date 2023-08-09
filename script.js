function login(){
    var user = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var controle = false

    //Arrays
    var usuarios = ['eduardo', 'admin', 'rodrigo']
    var senhas = ['123456', 'admin123', 'singed']   

    // var usuario = user.toLowerCase()

    if (user =="" || senha =="") {
        alert("Usuario ou Senhas em branco")
    }else{
        for(i=0;i<usuarios.length;i++){
            var usuario = user.toLowerCase()
            if(usuario == usuarios[i]&&senha==senhas[i]){
                controle = true
                // alert("entrar")
                location.href = 'inicial.html'
            } 
        }
        if(controle == false){
            alert('Usuario ou senha são incorretos')
        }
       
    }
}
