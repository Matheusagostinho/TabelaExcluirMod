const nomeContato = document.querySelector('input[name="nome"]');
const telefoneContato = document.querySelector('input[name="telefone"]');
const botaoAdicionar = document.querySelector('#btnAdicionar button');

const botaoModificar = document.querySelector("#editar");
const botaoExcluir = document.querySelector("#excluir");

const tabelaContatos = document.querySelector('#itensTabela');

const nomeContatoEditar = document.querySelector('input[name="nomeEditar"]');
const telefoneContatoEditar = document.querySelector('input[name="telefoneEditar"]');
const botaoEditar = document.querySelector('#btnEditar');

const listaContatos = JSON.parse(localStorage.getItem('contatos')  ) || []




function monstrarContatos(){
    tabelaContatos.innerHTML=''
    listaContatos.forEach((item, pos) =>{
  
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const img1 =  document.createElement('i')
    const div1 =document.createElement('div')
    const img2 =  document.createElement('i')
    const div2 =document.createElement('div')
    for (let i = 1; i <= 3; i++) 
    {
      
        if(i==1)
        {
            td1.setAttribute('class', 'column'+i)
       
            td1.appendChild(document.createTextNode(item.nomes));
           

        }
        if(i==2)
        {
            td2.setAttribute('class', 'column'+i)
            td2.appendChild(document.createTextNode(item.telefones));
            
          
        }
       if(i==3)
       {
            button1.setAttribute('class', 'btn btn-sm btn-primary')
            button2.setAttribute('class', 'btn btn-sm btn-primary')
            img1.setAttribute('class', 'material-icons')
            div1.setAttribute('class', 'ripple-container')
            img2.setAttribute('class', 'material-icons')
            div2.setAttribute('class', 'ripple-container')
            td3.setAttribute('class', 'column'+i)

            // Não conseguir incrementar o botal de editar, npo primiero da certo mais depoiis rodsa mais de um
               
                    // button1.setAttribute('id', 'editar')
                    // button1.setAttribute('data-toggle', 'modal')
                    // button1.setAttribute('data-target', 'modalEditar')
                    // img1.appendChild(document.createTextNode('create'))
                    // button1.appendChild(document.createTextNode('Editar'))
                    // button1.appendChild(img1)
                    // button1.appendChild(div1) 
                    // button1.addEventListener('click', function(e){
                    //     $('#modalEditar').modal('show')
                    //     console.log(pos);
                    //     modificarContato(pos)
                    // })
                    // td3.appendChild(button1)
    
                
                    button2.setAttribute('id', 'excluir')
                    img2.innerHTML='delete'
                    button2.appendChild(img2)
                    button2.appendChild(document.createTextNode('Excluir'))
                    button2.appendChild(div2)
                    button2.addEventListener('click', (e) =>{
                        e.preventDefault()
                        removerContato(pos)
                    })
                    td3.appendChild(button2)
                
                
                //Não conseguir usar a condicional ternaria, pois dava um erro
                //const simg=''
                // const resul = (y==1) ? button.setAttribute('id', 'editar'): button.setAttribute('id', 'excluir')
                // console.log(button);
                // resul= (y==1) ? simg = 'create':  simg = 'delete'
                // console.log(simg);
                // img.appendChild(simg)
                // resul = (y==1) ? button.appendChild(img+'Editar'+div): button.appendChild(img+'Excluir'+div)
            
        }
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tabelaContatos.appendChild(tr)

    }
    })

    
}

function removerContato(pos){
    listaContatos.splice(pos, 1)
    salvarNoArmazenamentoLocal()
    monstrarContatos();
   
}

// function modificarContato(pos){
//     botaoEditar.addEventListener('click', function(e){
//     const nome = nomeContatoEditar.value
//     const tel = telefoneContatoEditar.value
//     listaContatos[pos].nomes = nome
//     listaContatos[pos].telefones = tel
//     console.log( listaContatos[pos].nomes)
//     console.log( listaContatos[pos].telefones)
//     salvarNoArmazenamentoLocal()
//     $('#modalEditar').modal('hide')
//     monstrarContatos();
//     nomeContatoEditar.value = ''
//     telefoneContatoEditar.value =''
//     })
//     botaoEditar.removeEventListener('click', function(e){})
// }

function salvarNoArmazenamentoLocal(){
    localStorage.setItem('contatos', JSON.stringify(listaContatos))
    
}

monstrarContatos()

botaoAdicionar.addEventListener('click', () =>{
    const n = nomeContato.value
    const t = telefoneContato.value
    const objContatos ={
        nomes: n,
        telefones : t
    }
    listaContatos.push(objContatos)

    nomeContato.value =''
    telefoneContato.value = ''
    salvarNoArmazenamentoLocal()
    monstrarContatos()
   
})

//Modal
