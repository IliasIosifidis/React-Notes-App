import {useState, type ChangeEvent} from "react";
import TextInput from "./inputs/TextInput.tsx";
import SelectInput from "./inputs/SelectInput.tsx";
import TextAreaInput from "./inputs/TextAreaInput.tsx";


// @ts-expect-error
const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    })
    const [isFormVisible, setFormVisible] = useState(true)

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!formData.title || !formData.description) return;
        //     CREATE NOTE OBJECT
        const newNote = {id: Date.now(), ...formData}
        //     ADD NOTES TO STATE
        setNotes([newNote, ...notes])
        //     REST THE FORM DATA
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ""
        })
    }

    return (
        <>
            {/*TOGGLE BUTTON*/}
            {/*<button onClick={() => setFormVisible(!isFormVisible)} className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg*/}
            {/*cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4'>*/}
            {/*    {isFormVisible ? 'Hide Form' : 'Add New Note +'}*/}
            {/*</button>*/}
            {/*FORM*/}
            <form onSubmit={handleSubmit} className={"mb-6"}>
                {/*TITLE*/}
                <TextInput
                    label='Title'
                    name={'title'}
                    value={formData.title}
                    onChange={handleChange}
                    required/>

            {/*PRIORITY*/}
            <SelectInput
                label='Priority'
                name='priority'
                value={formData.priority}
                options={[
                    {value: 'High', label: '🔴High'},
                    {value: 'Medium', label: '🟡Medium'},
                    {value: 'Low', label: '🟢Low'}
                ]} onChange={function (): void {
                throw new Error("Function not implemented.");
            }}                />

            {/*CATEGORY*/}
            <SelectInput
                label='Category'
                name='category'
                value={formData.category}
                options={[
                    {value: 'Work', label: 'Work'},
                    {value: 'Fun', label: 'Fun'},
                    {value: 'Ideas', label: 'Ideas'}
                ]} onChange={function (): void {
                throw new Error("Function not implemented.");
            }}            />

            {/*DESCRIPTION*/}
            <TextAreaInput
                label='Description'
                name="description"
                value={formData.description}
                onChange={handleChange}
                required

            />

            {/*SUBMIT*/}
            <button
                type="submit"
                className='w-full bg-purple-200 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
                Add Note
            </button>
        </form>
    </>
    )
}

export default NoteForm