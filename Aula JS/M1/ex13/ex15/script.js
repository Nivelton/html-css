function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.width = '250px';  // Define a largura
        img.style.height = '250px'; // Define a altura
        img.style.borderRadius = '50%'
        
        if (fsex[0].checked) {
            gênero = 'homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'hbebe.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'hadolescente.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'hadulto.jpg');
            } else {
                img.setAttribute('src', 'hidoso.jpg');
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mbebe.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'madolescente.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'madulto.jpg');
            } else {
                img.setAttribute('src', 'midoso.jpg');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
