import bgImage from '../assets/image.jpg';

function EventForm({ formData, handleChange }) {
    const fields = [
        "Category", "City", "Industry", "ImageUrl", "Days Left", "Project Name",
        "Project Description", "Raised", "Investors", "Votes", "Min Investment",
        "Slogan", "Slogan2", "Reasons To Invest", "Address", "Website"
    ];

    const nestedFields = {
        TeamMembers: ["Image", "Position", "About"],
        Terms: ["Company Name", "Price per Share", "Deadline", "Funding Goal",
            "Max Investment", "Min Number of Shares", "Offering Type",
            "AssetType", "Max Number of Shares Offered"]
    };

    // Divide fields into two groups for left and right columns
    const halfwayIndex = Math.ceil(fields.length / 2);
    const leftFields = fields.slice(0, halfwayIndex);
    const rightFields = fields.slice(halfwayIndex);

    const renderField = (field, isNested = false, parentField = '') => (
        <div key={field} className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor={field}>
                {isNested ? `${parentField} - ${field}` : field}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-white leading-tight focus:outline-none focus:shadow-outline"
                id={field}
                type="text"
                placeholder={field}
                name={isNested ? `${parentField}[${field}]` : field}
                value={isNested ? formData[parentField]?.[field] || '' : formData[field] || ''}
                onChange={handleChange}
            />
        </div>
    );

    return (
        <div className="grid grid-cols-2 gap-4 px-4 py-4"
             style={{
                 backgroundImage: `url(${bgImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-full shadow-lg">
                {leftFields.map(field => renderField(field))}
                {Object.entries(nestedFields).slice(0, 1).map(([parentField, subFields]) => (
                    subFields.map(subField => renderField(subField, true, parentField))
                ))}
            </div>

            <div className="bg-black bg-opacity-50 p-4 rounded-full shadow-lg">
                {rightFields.map(field => renderField(field))}
                {Object.entries(nestedFields).slice(1).map(([parentField, subFields]) => (
                    subFields.map(subField => renderField(subField, true, parentField))
                ))}
            </div>

            <div className="col-span-2 flex justify-center">
                <button
                    type="submit"
                    className="mt-4 bg-cyan-400 bg-opacity-50 hover:bg-cyan-500 hover:bg-opacity-70 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg"
                >
                    Submit
                </button>
            </div>


        </div>

    );
}


import React, {useState} from 'react';


function EventFormScreen() {
    const [formData, setFormData] = useState({
        ProjectName: '',
        Category: '',
        City: '',
        // ... other fields
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes('[')) {
            // For nested fields like 'TeamMembers[Position]'
            const [parentField, subField] = name.replace(']', '').split('[');
            setFormData(prevFormData => ({
                ...prevFormData,
                [parentField]: {
                    ...prevFormData[parentField],
                    [subField]: value
                }
            }));
        } else {
            // For regular fields
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };


    return (
        <div>
            <EventForm formData={formData} handleChange={handleChange}/>

        </div>

    );
}

export default EventFormScreen;

