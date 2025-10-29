const avance=document.querySelectorAll('.btn-proximo')

avanca.forEach( button=>{
    button.addEventListener('clik', function(){
        const atual=document.querySelector('.ativo')
        const proximopasso='passo-'+this.getAttribute('data-proximo')
atual.classList.remove('ativo')
        document.getElementById(proximopasso).classlist.add('ativo')
    })

    })