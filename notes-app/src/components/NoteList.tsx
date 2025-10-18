import React from "react";
import Note from "./Note.tsx";

interface NoteType {
    id: string | number;
    title: string;
    category: string;
    description: string;
}

interface NoteListProps {
    notes: NoteType[];
    deleteNote: (id: string | number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">
                No Notes Yet
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
};

export default NoteList;
