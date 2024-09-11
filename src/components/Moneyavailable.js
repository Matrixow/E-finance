import React, { useState, useEffect } from 'react';

export default function Moneyavailable() {
    const [sources, setSources] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newSource, setNewSource] = useState({
        name: '',
        location: '',
        availablemoney: ''
    });


    useEffect(() => {
        const savedSources = JSON.parse(localStorage.getItem('financeSources'));
        if (savedSources) {
            setSources(savedSources);
        }
    }, []);

    const addSource = () => {
        const updatedSources = [
            ...sources,
            {
                key: sources.length + 1,
                ...newSource
            }
        ];
        setSources(updatedSources);
        localStorage.setItem('financeSources', JSON.stringify(updatedSources));

        setShowPopup(false);
        setNewSource({ name: '', location: '', availablemoney: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSource((prevSource) => ({
            ...prevSource,
            [name]: value
        }));
    };

    return (
        <div id="availablesection">
            <h3>Finance Sources</h3>
            {sources.map((source) => (
                <div className="available" key={source.key}>
                    <h4>{source.name}</h4>
                    <p>Loc: {source.location}</p>
                    <p>GHS {source.availablemoney}</p>
                </div>
            ))}

            {!showPopup && (
                <button onClick={() => setShowPopup(true)}>Add source</button>
            )}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h4>Add New Source</h4>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={newSource.name}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Location:
                            <input
                                type="text"
                                name="location"
                                value={newSource.location}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Available Money (GHS):
                            <input
                                type="number"
                                name="availablemoney"
                                value={newSource.availablemoney}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <button onClick={addSource}>Add</button>
                        <button onClick={() => setShowPopup(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
