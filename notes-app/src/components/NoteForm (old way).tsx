import {useState} from "react";


const NoteFormOldWay = () => {
    const [title, setTitle] = useState('Enter-Title-Here')
    const [priority, setPriority] = useState('Set-Priority')
    const [category, setCategory] = useState('Work')
    const [description, setDescription] = useState('')

    return (
    <form className={"mb-6"}>


        {/*TITLE*/}
        <div className={"mb-4"}>
            <label htmlFor="title" className="block font-semibold">
                Title
            </label>
            <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        {/*PRIORITY*/}
        <div className={"mb-4"}>
            <label htmlFor="title" className="block font-semibold">
                Priority
            </label>
            <select
                className="w-full p-2 border rounded-lg"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}>
                <option value="High">🔴High</option>
                <option value="Medium">🟡Medium</option>
                <option value="Low">🟢Low</option>
            </select>
        </div>

        {/*CATEGORY*/}
        <div>
            <label htmlFor="category" className="block font-semibold">
                Category
            </label>
            <select
                className="w-full p-2 border rounded-lg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Learning">Learning</option>
                <option value="Fun">Fun</option>
            </select>
            <br/>
        </div><br/>

        {/*DESCRIPTION*/}
        <div>
            <label htmlFor='description' className="block font-semibold">
                Description
            </label>
            <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}            >
            </input>
        </div><br/>

        {/*SUBMIT*/}
        <button
            type="submit"
            className='w-full bg-purple-200 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600'>
            Add Note
        </button>
    </form>
    )
}
