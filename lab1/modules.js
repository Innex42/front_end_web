function CurrentModule(props) {
    return (
    <div>
    <p> You will have {props.name} at somepoint. When? Who knows</p>
    </div>
    );
    }
    function Modules() {
    return (
    <div>
    <CurrentModule name="Front-end Web Development"></CurrentModule>
    <CurrentModule name="Honours Project"></CurrentModule>
    <CurrentModule name="Machine Learning and Data Analytics"></CurrentModule>
    <CurrentModule name="Secure Software Development"></CurrentModule>
    <CurrentModule name="Artificial Intelligence "></CurrentModule>
    <CurrentModule name="Honours Project"></CurrentModule>
    
    </div>
    );
    }

const domContainer = document.querySelector("#animalContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Modules />); 