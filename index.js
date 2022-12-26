import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

//JSX returns a javascript object, it is only when we render JSX through React that it can be interpreted as elements
//Use Pascal case instead of camel case, and wrap function names in angled brackets

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
