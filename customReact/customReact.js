import alert from "./anotherone.js";


function customRender(Element,Parent){
    // const domElement = document.createElement(Element.type);
    // domElement.innerHTML = Element.children;
    // domElement.setAttribute("href",Element.props.href);
    // domElement.setAttribute("target",Element.props.target);
    // Parent.append(domElement);

    //Better Version
     const domElement = document.createElement(Element.type);
     domElement.innerHTML = Element.children;    
     for (const prop in Element.props) {
       if(prop === "children"){
        continue;
       }
       domElement.setAttribute(prop,Element.props.prop)
     }        
     Parent.append(domElement);
}

const reactElement = {
    type:'a',
    props: {
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"click me to visit Google"
}

const root = document.getElementById("root");

customRender(reactElement,root)

