import React from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="note-card mx-2" style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            margin: '15px 0',
            transition: 'transform 0.2s ease',
            cursor: 'pointer',
            border: '1px solid #e0e0e0',
            width: '300px',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap'
        }}>
            <div className="note-content" style={{ marginBottom: '15px', }}>
                <h5 className="note-title" style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d2d2d',
                    marginBottom: '10px',
                }}>{note.title}</h5>
                <p className="note-description" style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.5',
                    marginBottom: '10px',
                }}>{note.description}</p>
                {note.tag && <span className="note-tag" style={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem'
                }}>{note.tag}</span>}
            </div>
            <div className="note-actions" style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end'
            }}>
                <button className="note-btn edit" onClick={() => { updateNote(note) }} style={{
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'background-color 0.2s'
                }}>
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button className="note-btn delete" onClick={() => { deleteNote(note._id); props.showAlert("Note Deleted Successfully", "success"); }} style={{
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'background-color 0.2s'
                }}>
                    <i className="fas fa-trash-alt"></i> Delete
                </button>
            </div>
        </div>
    )
}

export default Noteitem
