USE REF --- TO REFERNCE CERTAIN ELEMENT IN REACT

import { useRef, useState } from "react";

const inputRef = useRef();


inputRef.current.focus();

<!-- <input
ref={inputRef};
/> -->


REACT SELECT  --- FROM NPMJS
read the docs --- react-select
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

<!-- <Select onChnage={option => } defaultValue={sortingOptions[0]} options={sortingOptions}/> -->


 const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });


  useMemo(() => {

  }, [])  ---> like use Effect: this is used to make code optimal, and avoids the redundance in rerendering components you don't want to rerender especially when you are sorting a very large array.

  WORKING WITH CONTEXT API

  create a file in contexts folder
  name it accordingly
  ItemsContextProvider.jsx
cut and paste your states needed in the drilling and useEffect..

import {createContext} from "react"

export const ItemsContext = createContext();

<!-- return (
    <ItemsContext.Provider   --- use it as a wrapper
      value={{
        items,
        handleAddItems,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}            --- don't forget the children
    </ItemsContext.Provider>
  ); -->

  in the App component do this

  import ItemsContextProvider from "../contexts/ItemsContextProvider";
<!-- 
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
        <Header/>
        <ItemList/>
        <Sidebar/>
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  ); -->

  In the components you want to use you call the context
  import { useItemsContext } from "../lib/hooks";

  const { handleAddItem } = useItemsContext(); --the remaining configuration is in the lib file, under hooks



ZUSTAND

npm install zustand@(the version you want)

TYPE SCRIPT

props: {backgroundColor: string}

if you are destructuring it you do this

<!-- export default funtion Button({backgroundColor, fontSize, pillShape}: {backgroundColor: string, fontSize: number, pillShape: boolean;}){ -->

  the above can get ugly so we can instead extract and put it into a type

  type ButtonProps = {
    backgroundColor: string;
    fontSize: number;
    pillShape: boolean;
  };

the above types are mandetory unless i add a question mark just before the column 
eg
pillShape?: boolean
  <!-- export default funtion Button({backgroundColor, fontSize, pillShape}: ButtonProps){ ... -->

ctrl + space ----> this is used to call out intelisense capability of typscript in a component eg <Button /> putting your cursor between the last letter 'n' and the symbol '/' and using ctrl + space will show you the available probs that must be passed.

being stricter with type
backgroundColor: "red" | "blue" | "green" ----> this is called a union type and the | is called pipe symbol(denoting "or")

you can extract a duplicate property example --->

type Color = "red" | "blue" | "green" | "yellow" | "purple";

padding: number[]; ---> this means an array of numbers
pillShape: boolean[]; ---> means an array of boolean
padding: [number, number, number, number] ---> this is called a toople, it specifies the number of items you want in the array
inline writing of padding --->    `${padding[0]px} ${padding[1]}px ${padding[2]}px`

A different example example:

<!-- <Button
style={{
  backgroundColor: "blue",
  fontSize: 24,
  padding: "1rem 2rem",
  borderRadius: 8,
 
}}
/> -->


type ButtonProps ={
  style: React.CSSProperties;
}



export default funciton Button({
  style
}: ButtonProps)

---------------Yet another example

<!-- <Button
borderRadius={{
"topLeft": 5,           -----> these have strings as keys and number as values
"topRight": 5,
"bottomRight": 10,
"bottomLeft": 10,
<!-- }} -->
/> -->

---- this type only accounts for the type of the value but doesn't put into account the type of the key

type ButtonProps ={
  borderRadius: {
    topLeft: number;
    topRight: number;
  }
}

---- the proper way people do it is

type ButtonProps = {
  borderRadius: Record<string, number>  ---> here the key and value is specified
}



export default funciton Button({
 borderRadius
}: ButtonProps)

PASSING FUNCTIONS IN TYPE-SCRIPT EXAMPLE

const onClick = () => {}; ----> when the function returns nothing CASE-1
const onClick = (test: string) => { ----> when the function has a parameter of test with type stirng and returns a number CASE-2
  return 5;
}

<Button 
onClick={onClick}
/>


type ButtonProps = {
  onClick : () => void;   -----> //when function doesn't return anything use void CASE-1
  onClick: (test: string) => number; -----> when function returns a value and has a parameter CASE-2 
};

export default function Button({onClick}: ButtonProps){
  return <button onClick={onClick}> Click me </button>;
}


SPECIFYING CHILDREN

<Button>Click Me!</Button>

type ButtonProps = {
  children: React.ReactNode; -----> we use JSX.Element when we want to be strict with the type or element we are passing// we however want to use React.ReactNode most of the time
};

export default function Button({children}: ButtonProps){
  return <button>{children}</button>;
}

interface IButtonProps {
  text: string;
  count: number;
}

Video 86
Native Attributes, multiple attributes etc - 23:58
React.ComponentProps type- 25:05
...rest operator- 27:10
Intersecting - Adding other attributes or Variant props & -27:55
Event Handlers - 29:34
Hooks - 31:16{
  Optional chaining - 34:01
  useRef - 34:28
}
Constants, having a set of things like in an Array(tips and tricks) -35:29
Omit - 36:54
Specify type in useEffect -37:48
Generic -38:33
Reusable types - 44:57
unknown Types - 47:05{
  schema/validators - 48:17
  ts-reset 48:54
}
fetch (Next) - 52:27