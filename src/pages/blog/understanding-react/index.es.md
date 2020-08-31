---
path: "/entendiendo-react"
date: "2020-09-1"
title: "Entendiendo React"
content: "Este artículo es para comprender un poco que es lo que estamos haciendo cuando estamos desarrollando una aplicación en React"
image: react_box.png
author: "Ana Mafla"
keywords:
  - "react"
  - "JSX"
  - "Virtual DOM"
---

Has tenido un momento para mirar las cosas y preguntarte: como realmente funcionan?. Probablemente has usado React, pero te has detenido a revisar el código fuente de React?.

Los web frameworks y librerias, como React, exponen una API que te ayudan a estructurar tu código y abstraerte un poco de las APIs Web. La abstración es grandiosa, nos ayuda a enfocarnos en el problema que queremos resolver, y no en los detalles de la implementación. Sin embargo, la abstración tiene un costo, nosotros no podemos estar seguros de lo que esta ocurriendo tras bambalinas.

Algunas veces olvido que React es realmente solo JavaScript. La idea de este articulo es comprender un poco que es lo que estamos haciendo cuando estamos desarrollando una aplicación en React, y que se convierta en un recordatorio que solo estamos trabajando con objetos en JavaScript.

React no es una caja negra, tu puedes abrir esa caja y comprender que es lo que esta haciendo React.

##Descomponiendo los componentes

React es una librería basada en componentes para construir interfaces de usuario. Los componentes permiten desagregar la interfaz de usuario en piezas reutilizables e independientes.

En una aplicación de React un componente luce de esta manera:

```
 function Button () {
   return(
     <button onClick={() => alert("You clicked me!")}>
        Start
     </button>)
}
```

Un componente es una función, que opcionalmente acepta como argumento un objeto de "props" (que significa propiedades) y returna un elemento React. Esos componentes se conocen como "componentes funcionales" porque ellos son literalmente funciones de JavaScript.

Esta función esta usando JSX, abreviación para JavaScript XML, esta extensión de JavaScript nos permite escribir JavaScript que parece HTML. Porque JSX es JavaScript, no podemos usar palabras reservadas de JavaScript, esto incluye palabras como `class` y `for`. React nos da el atributo `className`.

JSX siempre va a ser transpilado al método `React.createElement()` con la ayuda del compilador [Babel](https://babeljs.io/). Mientras JSX parece HTML, es realmente solo una manera más fácil de escribir la declaración `React.createElement()`.

```
function Button() {
  return React.createElement(
   "button", // type
   {onClick: function onClick() {
     return alert("You clicked me!"); }},//props
   "Start" //children
 );
}
```

El método `React.createElement(type,[props],[...children])` toma estos tres argumentos:

- type: Tipo del componente o elemento Html (ejemplo: h1, div, p, button, etc).
- props: Las propiedades del objeto (ejemplo: {style: { color: “blue” }} o className o manejadores de eventos, etc).
- children: Cualquier cosa que necesites pasar entre los elementos del Dom.

Pero que es createElement?. Afortunadamente, React es una libreria de JavaScript de código abierto, y tu puedes acceder a su código fuente en su repositorio de GitHub. Podemos explorar este método en el código de [React](https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js):

Podemos ver que `createElement` esta retornando la función `ReactElement`:

```
export function createElement(type, config, children) {

 let propName;

 // Reserved names are extracted

 const props = {};
 let key = null;
 let ref = null;
 let self = null;
 let source = null;

.
.
.

return ReactElement(
   type,
   key,
   ref,
   self,
   source,
   ReactCurrentOwner.current,
   props,
 );
}
```

Y cuando exploramos `ReactElement`, podemos ver que esta retornando el objeto elemento:

```
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  .
  .
  .

  return element;
};
```

`React.createElement()` realiza un par de verificaciones para ayudare a escribir código libre de errores, pero esencialmente crea un objeto con estas propiedades:

- type
- key
- ref
- props

Returnando a nuestro ejemplo del Button. El llamado a `createElement` va a retornar este objeto:

```
{
     type: ‘button’,
     key: null,
     props: {
         children: “Start”
         onClick: () => {alert(“You clicked me!”)},
     ref: null
}
```

La magia de react viene de estas propiedades. Un elemento de React es lo que es retornado de los componentes, es un objeto que virtualmente describe los nodos del DOM que un componente representa. React lee estos objetos y los usas para construir el DOM y mantenerlo actualizado.

##The React Magic: Elements, Virtual DOM and Real DOM

Para reproducir React al DOM, necesitamos utilizar ReactDOM.render():

```
ReactDOM.render(
   <Button /> ,
 document.getElementById("root")
);
```

El método `ReactDom.render` acepta dos argumentos: el primer argumento es el elemento o componente que necesita ser reproducido en el DOM, y el segundo argumento es donde reproducirlo en el DOM.
A diferencia de los elementos DOM del navegador, los elementos de React son objetos planos que son baratos de crear. ReactDOM se encarga de actualizar el DOM para igualarlo con los elementos de React.

La idea detras de React es que creamos objetos de elementos de React que representan elementos HTML, estos no viven realmente en la página, son solo objetos que describen elementos HTML. Pero, podemos decirle a React que mire nuestros objetos elementos, y los use para crear los elementos HTML reales en la página, o, en el DOM.

Tenemos un DOM virtual en React y el DOM real en la página. Cuando nosotros cambiamos los datos en el objeto elemento de React, React actualizará el correspondiente elemento DOM automáticamente.

Este articulo es sobre una mínima parte de lo que hay dentro de la caja de React, hay muchas más cosas por explorar, pero la idea es hacer un primer acercamiento al código fuente de React. Te recomiendo esta [charla](https://www.youtube.com/watch?v=r33EWrP5EL4) de Jennifer Wong para más información sobre la exploración del repositorio de React.

Animó a todos a que profundicen en estos aspectos internos de React, y obtendrán una mejor idea de lo que React está haciendo. Este conocimiento conducirá a una mejor comprensión del código, nos permitira mejorar la depuración y ser más productivos.
