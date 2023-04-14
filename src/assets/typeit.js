import {TypeIt} from 'typeit-react'

<TypeIt
className="auth"
options={{speed: 20}}
getBeforeInit={(instance) => {
  instance.type("Hola, Esta es la Ruta Autorizata")
          .pause(750)
          .delete(2)
          .pause(500)
          .type("da.")
          .break()
          .type("Haz ingresado exitosamente")
          .break()
          .type("a nuestra ruta Privada.")
          .pause(2000);

  return instance;
}} />