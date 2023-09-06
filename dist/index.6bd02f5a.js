// const heading = React.createElement("h1", {id: "heading"}, "I am a heading");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//
//<div id="main">
//   <h1 id="heading"> this is a heading </h1>
//   <h2 id="heading2"> this is a heading2 </h2>
//</div>
//
//
const div = React.createElement("div", {
    id: "main"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I am a heading"),
    React.createElement("h2", {
        id: "heading2"
    }, "I am a heading2")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

//# sourceMappingURL=index.6bd02f5a.js.map
