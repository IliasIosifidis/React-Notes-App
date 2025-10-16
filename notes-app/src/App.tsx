import NoteForm from "./components/NoteForm.tsx";
import {useState} from "react";
import NoteList from "./components/NoteList.tsx";

const App = () => {
    const [notes,setNotes] = useState([])

    const deleteNote = (id: string) => {
        const confirmDelete = window.confirm('Are you sure?')
        if (confirmDelete) {
            setNotes(notes.filter((note) => note.id !== id))
        }
    }

    return (
        <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg'>
            <h2 className="text-4xl font-bold mb-4 text-center">🎵Notes-App🎵</h2>
            <NoteForm notes={notes} setNotes={setNotes}/>
            <NoteList notes={notes} deleteNote={deleteNote}/>
        </div>)
}

export default App