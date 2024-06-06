import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import CodeSnippet from "./CodeSnipet";
//import {CodeEditor} from "./CodeEditor";
import {FavoriteColorExample} from "./FavoriteColorExample";


export function AccordionListOne(){
    //const code = 'const a = 0;';
    const sampleCode = `import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
  `;

    const sampleCode2 = `import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);\n`;
    const sampleCode4 = `function Button() {
  const theme = useContext(ThemeContext);
  // ...
}
`;

    const sampleCode5 = `function Form() {
  const inputRef = useRef(null);
  // ...
}
`;

    const sampleCode6 = `function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
`;

    const sampleCode9 = `const [state, dispatch] = useReducer(reducer, initialArg, init?)
`;

    const sampleCode10 = `import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
}
`;

    const sampleCode7 = `import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
}
`;

    const sampleCode8 = `function handleClick() {
  dispatch({ type: 'incremented_age' });
}
`;

    const sampleCodeUseMemo = `
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const computedValue = useMemo(() => {
    return a + b;
  }, [a, b]);

  return <div>{computedValue}</div>;
}
`;
    const sampleCodeUseMemoReference = `
import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => item * 2);
  }, [data]);

  return <div>{processedData.join(', ')}</div>;
}
`;
    const sampleCodeUseMemoUsage = `
import React, { useMemo } from 'react';

function Example({ items }) {
  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item, 0);
  }, [items]);

  return <div>Total: {total}</div>;
}
`;

    const sampleCode3 = `
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // This effect will run after every render
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;
`;
    return (
        <div>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>What is a Hook?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <h3 style={{fontStyle:"bold", fontSize:"24", color:"red"}}>DEFINITION:</h3>
                    <p style={{fontSize:20}}> Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
                    <h3 style={{fontStyle:"bold",fontSize:"24", color:"red"}}>HOOKS RULES:</h3>
                    <p style={{fontSize:20}}>There are 3 rules for hooks: </p>

                    <p style={{fontSize:20}}> I) Hooks can only be called inside React function components. </p>
                    <p style={{fontSize:20}}> II) Hooks can only be called at the top level of a component. </p>
                    <p style={{fontSize:20}}> III) Hooks cannot be conditional</p>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h2>useState</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize:20}}> The React useState Hook allows us to track state in a function component. </p>

                    <p style={{fontSize:20}}> State generally refers to data or properties that need to be tracking in an application. </p>

                    <div>
                        <h3>Read State</h3>
                        <CodeSnippet code={sampleCode}  language="javascript"/>
                    </div>
                    <div>
                        <h3>Update State</h3>
                        <p style={{fontSize:20, color:"red"}}>WARNING! We should never directly update state. Ex: color = "red" is not allowed. We will use instead our state updater function.</p>
                        <CodeSnippet code={sampleCode2}  language="javascript"/>
                    </div>

                    <div>
                        <p style={{fontSize:20}}> Here is the preview of the code from above. </p>
                        <FavoriteColorExample/>
                    </div>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useEffect</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <h3 style={{color:"red"}}>DEFINITION: </h3>
                    <p style={{fontSize:20}}> The useEffect hook in React is a powerful tool used for managing side effects in functional components. Side effects can include anything from data fetching, subscriptions, or manually changing the DOM.</p>
                    <h3 style={{color:"red"}}> Here's some important information about the useEffect hook:  </h3>

                    <p style={{fontSize:20}}> I) The useEffect hook allows you to perform side effects in your functional components. </p>
                    <p style={{fontSize:20}}> II) It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods combined in class components. </p>

                    <p style={{fontSize:20}}> III) Dependencies array: useEffect accepts a function as its first argument, which is executed after every render. It also accepts an optional second argument, an array of dependencies. If any of the dependencies change between renders, the effect function will be re-executed. If you omit this array, the effect will run after every render. </p>

                    <p style={{fontSize:20}}> IV) Cleanup function: The function returned by useEffect (if specified) is a cleanup function that will run before the component unmounts or before running the effect next time if the dependencies change.</p>
                    <h3 style={{color:"red"}}>Here's a simple example to demonstrate how useEffect works: </h3>
                    <CodeSnippet code={sampleCode3}  language="javascript" />
                    <h3 style={{color:"red"}}>In this example: </h3>

                    <p style={{fontSize:20}}> -> We have a state variable count and a button that increments it. </p>
                    <p style={{fontSize:20}}> -> We use useEffect to update the document title with the current count after every render. </p>
                    <p style={{fontSize:20}}> -> Since we didn't specify any dependencies, the effect will run after every render. </p>
                    <p style={{fontSize:20}}> -> This is a basic demonstration of how useEffect can be used to perform side effects in a React functional component.</p>

                    <h3 style={{color:"red"}}>Here is a preview of the code above: </h3>

                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useContext</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize:20}}> Context lets a component receive information from distant parents without passing it as props. </p>

                    <p style={{fontSize:20}}> For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep. </p>
                    <p style={{fontSize:20}}> >useContext - reads and subscribes to a context. </p>
                    <CodeSnippet code={sampleCode4}  language="javascript" />

                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useRef</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize:20}}> Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. </p>
                    <p style={{fontSize:20}}> Unlike with state, updating a ref does not re-render your component. </p>
                    <p style={{fontSize:20}}> Refs are an “escape hatch” from the React paradigm. </p>
                    <p style={{fontSize:20}}> They are useful when you need to work with non-React systems, such as the built-in browser APIs. </p>

                    <p style={{fontSize:20}}> >useRef - declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node. </p>
                    <p style={{fontSize:20}}> >useImperativeHandle - lets you customize the ref exposed by your component. This is rarely used. </p>

                    <div>
                        <CodeSnippet code={sampleCode5}  language="javascript"/>
                    </div>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useReducer</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize:20}}> useReducer is a React Hook that lets you add a reducer to your component. </p>

                    <div>
                        <CodeSnippet code={sampleCode9}  language="javascript"/>
                    </div>

                    <h3 style={{fontStyle:"bold", fontSize:24}}>Reference </h3>
                    <h3 style={{fontStyle:"bold", fontSize:24}}>useReducer(reducer, initialArg, init?)</h3>
                    <p style={{fontSize:20}}> Call useReducer at the top level of your component to manage its state with a reducer. </p>

                    <div>
                        <CodeSnippet code={sampleCode10}  language="javascript"/>
                    </div>
                    <h4 style={{fontStyle:"bold", fontSize:24}}>Parameters </h4>
                    <p style={{fontSize:20}}> >reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types. </p>
                    <p style={{fontSize:20}}> >initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument. </p>
                    <p style={{fontSize:20}}> >optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg). </p>

                    <h4 style={{fontStyle:"bold", fontSize:24}}>Returns </h4>
                    <p style={{fontSize:20}}> useReducer returns an array with exactly two values: </p>
                    <p style={{fontSize:20}}> 1.The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init). </p>
                    <p style={{fontSize:20}}> 2.The dispatch function that lets you update the state to a different value and trigger a re-render. </p>

                    <h4 style={{fontStyle:"bold", fontSize:24}}>Caveats </h4>
                    <p style={{fontSize:20}}> >useReducer is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it. </p>
                    <p style={{fontSize:20}}> >In Strict Mode, React will call your reducer and initializer twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your reducer and initializer are pure (as they should be), this should not affect your logic. The result from one of the calls is ignored. </p>

                    <h3 style={{fontStyle:"bold", fontSize:24}}>Usage  </h3>
                    <h4 style={{fontStyle:"bold", fontSize:24}}>Adding a reducer to a component   </h4>
                    <p style={{fontSize:20}}> Call useReducer at the top level of your component to manage state with a reducer. </p>

                    <div>
                        <CodeSnippet code={sampleCode7}  language="javascript"/>
                    </div>

                    <p style={{fontSize:20}}> useReducer returns an array with exactly two items: </p>
                    <p style={{fontSize:20}}> 1.The current state of this state variable, initially set to the initial state you provided. </p>
                    <p style={{fontSize:20}}> 2.The dispatch function that lets you change it in response to interaction. </p>
                    <p style={{fontSize:20}}> To update what’s on the screen, call dispatch with an object representing what the user did, called an action: </p>

                    <div>
                        <CodeSnippet code={sampleCode8}  language="javascript"/>
                    </div>

                    <p style={{fontSize:20}}> React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI. </p>
                    <p style={{fontSize:20}}> useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component. Read more about choosing between useState and useReducer. </p>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useCallback</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize:20}}> A common way to optimize re-rendering performance is to skip unnecessary work. </p>
                    <p style={{fontSize:20}}> For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render. </p>
                    <p style={{fontSize:20}}> To skip calculations and unnecessary re-rendering, use one of these Hooks: </p>

                    <p style={{fontSize:20}}> >useMemo - lets you cache the result of an expensive calculation. </p>

                    <p style={{fontSize:20}}> >useCallback - lets you cache a function definition before passing it down to an optimized component. </p>

                    <div>
                        <CodeSnippet code={sampleCode6}  language="javascript"/>
                    </div>
                    <p style={{fontSize:20}}> Sometimes, you can’t skip re-rendering because the screen actually needs to update. </p>

                    <p style={{fontSize:20}}> In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart). </p>
                    <p style={{fontSize:20}}> To prioritize rendering, use one of these Hooks: </p>

                    <p style={{fontSize:20}}> >useTransition - lets you mark a state transition as non-blocking and allow other updates to interrupt it. </p>
                    <p style={{fontSize:20}}> >useDeferredValue - lets you defer updating a non-critical part of the UI and let other parts update first. </p>

                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion style={{background:"#F7EEDD"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useMemo</h2>
                </AccordionSummary>

                    <AccordionDetails>
                        <p style={{fontSize:20}}> useMemo is a React Hook that memoizes a computed value to optimize performance. </p>

                        <div>
                            <CodeSnippet code={sampleCodeUseMemo} language="javascript"/>
                        </div>

                        <h3 style={{fontStyle:"bold", fontSize:24}}>Reference </h3>
                        <h3 style={{fontStyle:"bold", fontSize:24}}>useMemo(createFunction, dependencies)</h3>
                        <p style={{fontSize:20}}> Call useMemo at the top level of your component to memoize a computed value. </p>

                        <div>
                            <CodeSnippet code={sampleCodeUseMemoReference} language="javascript"/>
                        </div>

                        <h4 style={{fontStyle:"bold", fontSize:24}}>Parameters </h4>
                        <p style={{fontSize:20}}> >createFunction: A function that returns a computed value. </p>
                        <p style={{fontSize:20}}> >dependencies: An array of dependencies that, when changed, will cause the computed value to be re-evaluated. </p>

                        <h4 style={{fontStyle:"bold", fontSize:24}}>Returns </h4>
                        <p style={{fontSize:20}}> useMemo returns the memoized value. </p>

                        <h4 style={{fontStyle:"bold", fontSize:24}}>Caveats </h4>
                        <p style={{fontSize:20}}> >Memoization is a performance optimization. Only use it when necessary, such as for expensive computations. </p>
                        <p style={{fontSize:20}}> >The dependencies array should include all variables that the memoized value depends on. </p>
                        <p style={{fontSize:20}}> >If a dependency changes, the memoized value will be recomputed. </p>

                        <h3 style={{fontStyle:"bold", fontSize:24}}>Usage </h3>
                        <h4 style={{fontStyle:"bold", fontSize:24}}>Memoizing a Computed Value</h4>
                        <p style={{fontSize:20}}> Call useMemo at the top level of your component to memoize a computed value. </p>

                        <div>
                            <CodeSnippet code={sampleCodeUseMemoUsage} language="javascript"/>
                        </div>

                        <p style={{fontSize:20}}> useMemo memoizes the result of the function passed to it, re-computing the value only when one of its dependencies changes. This can optimize performance by avoiding unnecessary computations. </p>
                    </AccordionDetails>


                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
