/*class CurrentAnimal extends React.Component {
    render(){
        return(
            <div>
                <p> This is a {this.props.name} </p>
            </div>
        );
    }
}
class Animals extends React.Component{
    render(){
        return(
            <div>
                <CurrentAnimal name="dog"></CurrentAnimal>
                <CurrentAnimal name="cat"></CurrentAnimal>
                <CurrentAnimal name="mouse"></CurrentAnimal>
            </div>
        );
    }
} */

function CurrentAnimal(props) {
    return (
    <div>
    <p> This is a {props.name} </p>
    </div>
    );
    }
    function Animals() {
    return (
    <div>
    <CurrentAnimal name="dog"></CurrentAnimal>
    <CurrentAnimal name="cat"></CurrentAnimal>
    <CurrentAnimal name="mouse"></CurrentAnimal>
    </div>
    );
    }

const domContainer = document.querySelector("#animalContainer");
const root = ReactDOM.createRoot(domContainer);
root.render(<Animals />); 