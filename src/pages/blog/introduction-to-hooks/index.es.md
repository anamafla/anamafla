---
path: "/introduccion-a-hooks"
date: "2019-05-1"
title: "Introduccion a Hooks"
content: "Este post es una  introduccion a React Hooks"
image: undraw_task_31wc.png
author: "Ana Mafla"
---

React Hooks es una funcionalidad agregada en React 16.8, que te permite usar "estado" y otras características de React en componentes funcionales, algo que antes era exclusivo de las clases.

## 1. Porque usar React Hooks?

En la documentación de React podemos encontrar las ventajas, básicamente los Hooks permiten:

- Reusar la lógica de estado sin cambiar la jerarquía de tu componente. Esto hace fácil compartir Hooks entre varios componentes o con la comunidad.

- Dividir un componente en funciones mas pequeñas basado en lo que las partes estan relacionadas, en lugar de forzar una división basada en los métodos de ciclo de vida.

- Usar más características de React sin clases.

Con React Hooks, podemos reproducir el comportamiento que usabamos en componentes de clases en componentes funcionales:

| Componente de Clase                                                                   | Componente Funcional con Hooks                        |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Mantiene `state`                                                                      | El estado del componente utiliza el hook `useState()` |
| Utiliza métodos del ciclo de vida como `componentDidMount()` y `componentDidUpdate()` | Utiliza el hook `useEffect()`                         |
| Acceso al context (by setting `contextType`)                                          | Static contextType usa el hook `useContext()`         |

<br/>

## 2. Que son los Hooks?

Los Hooks son funciones con nombres que comienzan con `use`, que te permiten enganchar (hook into) el estado de React y las características de ciclos de vida en componentes funcionales.
Los Hooks no funcionan dentro de las clases.

Los componentes funcionales en React se parecen a esto:

```
const App = () => {
   // You can use Hooks here!
   return <div />
   }
```

o esto:

```
function App() {
   // You can use Hooks here!
   return <div />;
   }
```

React provee los siguientes hooks incorporados:

### Hooks Básicos

- useState
- useEffect
- useContext

### Hooks Adicionales

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Pero los más importante es que puedes crear tus propios Hooks para reusar el comportamiento de estado entre diferentes componentes.

## 3. useState y useEffect

Vamos enfocarnos en los hooks más básicos: useState y useEffect.

Para eso, vamos a construir una simple aplicación que pregunta tu estado de ánimo y te da un mensaje de acuerdo a tu estado de ánimo.

<p align="center">
<img width=100% src="https://media.giphy.com/media/jxd9pM1TS8FWyBK2fW/giphy.gif" alt="demo mood app" />
</p>

### useState

useState es un Hook, que llamamos dentro de un componente funcional para adiccionarle algún estado local.

Para usarlo, primero necesitamos importar el Hook `useState` de React:

```
import React, { useState } from 'react';

function App () {
  const [ mood, setMood] = useState("happy");
}
```

Esto es básicamente una función, donde el único argumento es el estado inicial y la cual retorna un arreglo. Este arreglo contiene el valor del estado actual y una función que te permite actualizarlo.

En nuestro ejemplo, estamos inicializando `mood` con “happy”.

Puedes usarlo mas de una vez en un solo componente. La sintaxis de "destructuring" nos permite dar diferentes nombres a las variables de estado que declaramos llamando useState.

```
function App () {
const [ mood, setMood] = useState("happy");
const [ message, setMessage] = useState("Share your joy with others  💃 🎉🕺");
}
```

Ahora, para leer el estado, usamos `mood` y `message`:

`<p> {message}</p>`

Y para actualizar el estado, usamos `setMood` y `setMessage`:

```
setMood('Sad');
setMessage(“"Listen to your favorite song 🎧 🎼");
```

En nuestra App, vamos a escribir una función `handleMood`, que va a ser llamada cuando el usuario haga click en el boton del emoticon, y entonces nuestro estado de ánimo va a ser actualizado de acuerdo a los datos de `moods`.

```
const moods  = [{mood: "happy", message: "Share your joy with others  💃🎉🕺", emoticon: "😁"},
     {mood: "angry", message:"Relax...just breathe 🧘🏽‍♀️🧘🏻‍♂️", emoticon: "😠"},
     {mood: "sad",   message:"Listen to your favorite song  🎧 🎼", emoticon: "😢"},
     {mood:"bored", message: "Read a book, Go for a walk 🏃🏻‍♀️📕  📖", emoticon: "😒"}]


  const handleMood = (e) =>{
    setMood(e.target.value);
  }


```

La actualización del estado utilizando el actualizador provisto por el hook `useState` es asíncrono, y no se reflejará inmediatamente pero disparará un re-render. Si queremos realizar una acción en la actualización de estado, necesitamos utilizar el hook `useEffect`, muy similar a utilizar `componentDidUpdate` en los componentes de clase. Y que es lo que necesitamos en nuestra app, cuando el usuario de click en su estado de ánimo, inmediatamente mostrarle el mensaje acorde.

### useEffect

useEffect nos permite desarrollar efectos secundarios. Es una función que acepta una función anónima como su primer argumento:

`useEffect(effect-function)`

Usando este hook, estamos diciendole a React que nuestro componente necesita hacer algo después de renderizar. React recordará la función que nosotros pasamos (“effect-function”), y la llamara después para realizar la actualización del DOM. Necesitamos colocar nuestra acción en la función useEffect.

```
useEffect(() => {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
  });
```

Por defecto, useEffect será llamado en cada renderización, pero podemos pasar un segundo argumento que es el arreglo de valores de los cuales el efecto depende. Entonces solo se correrá el efecto cuando uno de esos valores cambie.

Si nosotros pasamos un arreglo vacío como segundo argumento, eso le esta diciendo a React que únicamente necesitamos llamar este efecto cuando el efecto es montado.

`useEffect( effect-function, [])`

En nuestro caso, solo necesitamos configurar el mensaje cuando el estado de ánimo (`mood`) cambie.

```
useEffect(() => {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
  }, [mood]);

```

Aquí esta finalmente nuestro componente funcional App:

```
function App () {

  const [ mood, setMood] = useState("");
  const [ message, setMessage] = useState("");

  const moods  = [
                  {mood:"happy", message: "Share your joy with others 💃 🎉🕺", emoticon: "😁"},
                  {mood:"angry", message:"Relax...just breathe 🧘🏽‍♀️🧘🏻‍♂️", emoticon: "😠"},
                  {mood:"sad", message:"Listen to your favorite song  🎧 🎼", emoticon: "😢" },
                  {mood:"bored", message: "Read a book, Go for a walk 🏃🏻‍♀️📕  📖", emoticon: "😒"}]


  const handleMood = (e) =>{
    setMood(e.target.value);
  }

  useEffect(() => {
   if (mood.length > 0) {
    setMessage(moods.filter( item => item.mood === mood)[0].message)
    }
  }, [mood]);

  return(
   <div>
    <h1>What is your mood today?</h1>
      <div>
         {moods.map( item =>
           <button onClick={handleMood} value={item.mood} className="mood">{item.emoticon} </button>
          )}
      </div>
      <p> {message} </p>
    </div>
  )
}
```

https://codepen.io/ANAMAFLA/pen/XwpOKb

Espero que esta introducción a Hooks pueda ser útil para ti.
