import React, { useState } from 'react';

const NewProjectForm = () => {
    const [formData, setFormData] = useState({
        _id: '',
        Category: '',
        City: '',
        Industry: '',
        ImageUrl: '',
        DaysLeft: '',
        ProjectName: '',
        ProjectDescription: '',
        Raised: '',
        Investors: '',
        Votes: '',
        MinInvestment: '',
        Slogan: '',
        Slogan2: '',
        ReasonsToInvest: [],
        Address: '',
        Website: '',
        TeamMembers: {
            Image: '',
            Position: '',
            About: '',
        },
        Terms: {
            CompanyName: '',
            PricePerShare: '',
            Deadline: '',
            FundingGoal: '',
            MaxInvestment: '',
            MinNumberOfShares: '',
            OfferingType: '',
            AssetType: '',
            MaxNumberOfSharesOffered: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, like sending data to your backend
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Add New Project</h2>

                {/* Repeat similar structure for each field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Category">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Category"
                        type="text"
                        placeholder="Category"
                        name="Category"
                        value={formData.Category}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="City">
                        City
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="City"
                        type="text"
                        placeholder="City"
                        name="City"
                        value={formData.City}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Industry">
                        Industry
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Industry"
                        type="text"
                        placeholder="Industry"
                        name="Industry"
                        value={formData.Industry}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ImageUrl">
                        ImageUrl
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ImageUrl"
                        type="text"
                        placeholder="ImageUrl"
                        name="ImageUrl"
                        value={formData.ImageUrl}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DaysLeft">
                        Days Left
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="DaysLeft"
                        type="text"
                        placeholder="Days Left"
                        name="DaysLeft"
                        value={formData.DaysLeft}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ProjectName">
                        Project Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ProjectName"
                        type="text"
                        placeholder="Project Name"
                        name="ProjectName"
                        value={formData.ProjectName}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewProjectForm;
