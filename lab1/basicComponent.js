const BasicComponent=()=>{
    return<h1>Welcome Message!</h1>;
}

const domContainer = document.querySelector('#basicComponentContainer');
const root = ReactDOM.createRoot(domContainer);
root.render(< BasicComponent  />);

