let casas = [
    {
        nombre: "palmas",
        direccion: "20g",
        precio: 2000,
        color: "blanca",
        metros: 1000,
        ubicacion: "valledupar",
        cuartos: 3,
        baños: 2,
        foto: "https://photos.zillowstatic.com/fp/40f46ddf77aa90e8f2f7495fd569e977-p_e.webp"

    },
    {
        nombre: "san antonio",
        direccion: "21g",
        precio: 3000,
        color: "blanca",
        metros: 1500,
        ubicacion: "valledupar",
        cuartos: 4,
        baños: 3,
        foto: "https://photos.zillowstatic.com/fp/eacba81a42ac694cbaed2efbba8e634d-p_e.webp"

    },
    {
        nombre: "billa castro",
        direccion: "21g",
        precio: 3000,
        color: "blanca",
        metros: 1500,
        ubicacion: "valledupar",
        cuartos: 4,
        baños: 3,
        foto: "https://tpc.googlesyndication.com/simgad/6822674230205295058?"

    },
    {
        nombre: "la cuarta",
        direccion: "4ta A",
        precio: 10000,
        color: "azul",
        metros: 5000,
        ubicacion: "valledupar",
        cuartos: 6,
        baños: 4,
        foto: "https://photos.zillowstatic.com/fp/b179a7bc6a1bfab1ea470e5099fb94e6-p_e.webp"

    },
    {
        nombre: "la bombonera",
        direccion: "sicarare",
        precio: 15000,
        color: "verde",
        metros: 7500,
        ubicacion: "valledupar",
        cuartos: 7,
        baños: 5,
        foto: "https://photos.zillowstatic.com/fp/11779b53e6ca8595f69ed6b79356a8ad-p_e.webp"

    }
]
function mostrar(search){
    $("#casas").empty();
    for (let i = 0; i < search.length; i++) {
        $("#casas").append(
            `
           <div class="casa">
             <img src="${search[i].foto}">
             <h2>$ ${search[i].precio}</h2>
             <h2>${search[i].nombre}</h2>
                <div class="descripcion">
                    <p>${search[i].cuartos} habitaciones</p> |
                    <p>${search[i].baños} baños</p> |
                    <p>${search[i].ubicacion} valledupar </p> |
                </div>
           </div>
           
          `
        )
    }
}
$(document).ready(function () {
    mostrar(casas)
    $("#buscar").click(function(){
      let busquedad = $("#busqueda").val().toLowerCase()
      let arraybusquedad = []
      if (busquedad === ""){
        mostrar(casas)
      }else{
        for(let i = 0; i < casas.length; i++){
            if(busquedad === casas[i].nombre.toLowerCase()){
                arraybusquedad.push(casas[i])
            }
        }
      }
      mostrar(arraybusquedad)
      $("#busqueda").val("")
    })
    
});

function algo(){
    let hola ="Silvestre"
}