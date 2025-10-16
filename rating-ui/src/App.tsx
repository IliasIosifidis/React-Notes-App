import Rating from "./components/Rating.tsx";

const App = () =>{
    return (
        <div>
            <Rating heading='Howdy?'
            feedbackMessages={['Hate it', 'Dislike it', 'Whatever', 'Rocks', 'HOOOOLY!']}/>
        </div>)
}

export default App