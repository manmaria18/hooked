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
//const sampleCode3 =``;
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
