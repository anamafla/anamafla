---
path: "/svg-y-react"
date: "2020-08-20"
title: "SVG y React"
content: "Este es un post sobre como usar SVG en React"
image: undraw_smiley_face_lmgm.png
author: "Ana Mafla"
keywords:
  - "react"
  - "SVG"
  - "react-spring"
  - "animacion"
---

SVG se utiliza para definir gráficos basados en vectores para la web. Es un estándar web para describir imágenes que se puede representar de forma limpia en cualquier tamaño y estan diseñados especificamente para trabajar bien con otros estándares web, incluidos JavaScript, DOM, CSS and HTML.

SVG es un formato gráfico que se adapta mejor a las demandas actuales de desarrollo web de escalabilidad, adaptabilidad, interactividad, desempeño y accesibilidad.

Si estás interesado en una introducción a SVG, puedes dar un vistazo a mi publicación anterior: [Comenzando con SVG](https://www.anamafla.com/es/blog/getting-started-with-svg/)

La siguiente pregunta que me hice cuando empecé a conocer sobre SVG y las cosas geniales que son posibles con este formato de imagen fue: Como puedo usar la flexibilidad y versatilidad de SVG en mis proyectos de React?

En este articulo vamos a describir como incluir y animar una carita feliz hecha con SVG en una aplicacion de react.

```
<svg height="300" width="300">
   <circle cx="150" cy="150" r="150" fill="yellow" id="face" />
   <circle cx="100" cy="100" r="15" fill="black" id="left-eye"/>
   <circle cx="200" cy="100" r="15" fill="black" id="right-eye"/>
   <path d="M 75 200 Q 150 260 225 200" stroke="black"  stroke-width="4" fill="none"/>
</svg>
```

## Como incluir SVG en una aplicación de React

Tenemos dos formas de incluir el SVG en una aplicación de React:

#### a. Importar el SVG como un componente de React.

SVG se puede importar y usar directamente como un componente de React. Esta forma es perfecta para animaciones simples y estilos con CSS, y es facil actualizar el SVG.

```
import { ReactComponent as Face} from “./face.svg”;

const Smiley= ( ) => ( <Face/>);
```

#### b. Transformar el SVG en JSX

Basicamente copiar y pegar el contenido del archivo .svg en nuestro código de react. De esta manera nos permite hacer uso de props, state and event handlers, aunque es más complejo actualizar el SVG.

En nuestro ejemplo, vamos a utilizar la segunda forma. Tomamos el SVG del código anterior y lo convertimos en un componente de React.

```
const Face = () => {
  return(
  <svg height="300" width="300">
    <circle cx="150" cy="150" r="150" fill="yellow" id="face"/>
    <circle cx="100" cy="100" r="15" fill="black" id="left-eye"/>
    <circle cx="200" cy="100" r="15" fill="black" id="right-eye"/>
    <path d="M 75 200 Q 150 260 225 200" stroke="black"  strokeWidth="4" fill="none" id="mouth"/>
  </svg>
)
}
```

Y luego vamos incluir nuestro componente <Face/> en App.

```
const App = () => {
  return (
    <>
      <h1>Be Happy</h1>
      <Face />
    </>
  )
}
```

## 2. Hacer nuestra cara personalizable

Podemos personalizar nuestra cara agregando algunas props que nos permitan cambiar algunos atributos de nuestro svg como `fill` y `path`.

```
const Face = (props) => {

  const {color, x, y} =props;

  return(
  <svg  height="300" width="300"  >
    <circle cx="150" cy="150" r="150" fill={color} id="face"/>
    <circle cx="100" cy="100" r="15" fill="black" id="left-eye"/>
    <circle cx="200" cy="100" r="15" fill="black" id="right-eye"/>
    <path d={`M 75 200 Q ${x} ${y} 225 200`} stroke="black"  strokeWidth="4" fill="none" id="mouth"/>
  </svg>
)
}
```

Ahora podemos cambiar el color de nuestra cara y la forma de su boca. Cuando llamemos nuestro component <Face>, vamos a pasar los props requeridos: `color`, `x` y `y`.

```
const App = () => {
  return (
    <>
       <h1>Emotions</h1>
       <Face  color={"cyan"} x={150} y={130}/>
       <Face  color={"yellow"} x={150} y={260}/>
       <Face  color={"pink"} x={150} y={200}/>
    </>
  )
}
```

## 3. Agregando animaciones a SVG con React-Spring

Vamos agregar una animación para hacer que la boca sea dibujada cuando demos click en la cara.

React-spring es una libreria de animación basada en la física de los resortes que ayuda a crear tus animaciones, el motor detras de react-springs funciona en base a la física e intenta animar tus elementos en función de como lo harían si estuvieran en el mundo real.

Vamos a necesitar `useSpring` y `animated` de react-spring:

```
import { useSpring, animated } from “react-spring”;
```

`useSpring` es un hook personalizado que convierte los valores en valores animados, toma un objeto con los valores de `from` y `to` como los estados inicial y final, mientras que react-springs maneja la transición entre ellos.

Agregar algún estado local nos permitirá agregar algunas interacciones reales a nuestra animación. En lugar de `from` y `to`, podemos usar un operador ternario para nuestras animaciones.

Primero, vamos a definir un estado en nuestro componente para cuando la cara este sin boca (false) y con su boca(true). Y este estado cambiará cuando demos click dentro de la cara.

```
const [active, setActive] = useState(false);

const animatedProps = useSpring({
   strokeDasharray: active ? "170,0" : "0,170"
 });

```

Para crear la animación del trazo, usamos la propiedad `stroke-dasharray`:

`stroke-dasharray`
Convierte una línea continua en una discontinua. La razón por la que se llama dasharray es que proporcionas una arreglos de números como valor. Los valores definen la longitud de los guiones y los espacios.

Cuando `active` es true:
`strokeDasharray = “170,0”`
Estamos definiendo un arreglo de guiones donde cada guión es del tamaño del trazo en sí.

Cuando `active` es false:
`strokeDasharray = “0,170”`
Ahora el trazo será invisible. Dado que el espacio entre guiones es la longitud total del trazo.

Para aplicar nuestra animación spring, necesitamos adiccionar `animated` a nuestros elementos html y pasar nuestra animación a nuestro estilo.

```
<animated.path
       d={`M 75 200 Q ${x} ${y} 225 200`}
       strokeWidth="4"
       stroke="black"
       fill="none"
       id="mouth"
       strokeDasharray={animatedProps.strokeDasharray}
     />
```

Aquí esta el CodeSandbox con el que puedes jugar:

https://codesandbox.io/s/react-and-svg-and-react-spring-e1p9u?fontsize=12&hidenavigation=1
