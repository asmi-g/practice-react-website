import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

//JSX returns a javascript object, it is only when we render JSX through React that it can be interpreted as elements
//Use Pascal case instead of camel case, and wrap function names in angled brackets

// function BodyContent() {
//     return(
//     <div>
//         <img src="react-logo.png" width="40px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }

//const pageBody = document.getElementById("root")
//ReactDOM.render(<div><BodyContent /></div>, pageBody)

function Page(){
    return(
        <div className="main-page">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
