import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // For notifications
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150'); // Default profile photo
  const [aboutBio, setAboutBio] = useState('Write about yourself here...');
  const [skills, setSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: '',
    twitter: '',
    github: '',
    instagram: ''
  });
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    username: '',
    birthDate: '',
    email: '',
    location: '',
    organization: '',
    website: '',
    phone: '',
    preferredLanguage: ''
  });
  const [experience, setExperience] = useState([]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      toast.success('Profile photo added successfully!');
    }
  };

  const handlePhotoDelete = () => {
    setProfilePhoto('https://via.placeholder.com/150'); // Reset to default photo
    toast.error('Profile photo deleted!');
  };

  const handleSocialLinkChange = (e) => {
    setSocialLinks({
      ...socialLinks,
      [e.target.name]: e.target.value,
    });
  };

  const handleBasicInfoChange = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = (newSkill) => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      toast.success('Skill added!');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
    toast.error('Skill removed!');
  };

  const addExperience = () => {
    setExperience([...experience, { position: '', type: 'Frontend', details: '' }]);
    toast.success('Experience added!');
  };

  const handleExperienceChange = (e, index) => {
    const updatedExperience = [...experience];
    updatedExperience[index][e.target.name] = e.target.value;
    setExperience(updatedExperience);
  };

  const handleExperienceRemove = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
    toast.error('Experience removed!');
  };

  const handleSave = () => {
    // Save the profile data (can integrate with an API or local storage)
    toast.success('Profile saved successfully!');
  };

  const handleCancel = () => {
    // Optionally, you could reset the form or navigate back to a different page
    toast.error('Changes discarded!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Profile Photo, Info, and Social Links */}
          <div className="col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Profile Photo</h2>
              {profilePhoto ? (
                <div className="flex items-center gap-4">
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border"
                  />
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded"
                    onClick={handlePhotoDelete}
                  >
                    Delete Photo
                  </button>
                </div>
              ) : (
                <input type="file" onChange={handlePhotoUpload} className="bg-gray-700 p-2 rounded w-full" />
              )}
              <input
                type="file"
                onChange={handlePhotoUpload}
                className="bg-gray-700 p-2 rounded w-full mt-4"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-2xl" />
                  <input
                    type="url"
                    name="github"
                    value={socialLinks.github}
                    onChange={handleSocialLinkChange}
                    placeholder="GitHub URL"
                    className="p-2 border rounded bg-gray-700 text-white w-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-2xl" />
                  <input
                    type="url"
                    name="linkedin"
                    value={socialLinks.linkedin}
                    onChange={handleSocialLinkChange}
                    placeholder="LinkedIn URL"
                    className="p-2 border rounded bg-gray-700 text-white w-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaInstagram className="text-2xl" />
                  <input
                    type="url"
                    name="instagram"
                    value={socialLinks.instagram}
                    onChange={handleSocialLinkChange}
                    placeholder="Instagram URL"
                    className="p-2 border rounded bg-gray-700 text-white w-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaTwitter className="text-2xl" />
                  <input
                    type="url"
                    name="twitter"
                    value={socialLinks.twitter}
                    onChange={handleSocialLinkChange}
                    placeholder="Twitter URL"
                    className="p-2 border rounded bg-gray-700 text-white w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Main Profile Content */}
          <div className="col-span-2">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">About Bio</h2>
              <textarea
                className="w-full p-2 border rounded bg-gray-700 text-white"
                value={aboutBio}
                onChange={(e) => setAboutBio(e.target.value)}
                placeholder="Write about yourself..."
              ></textarea>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="p-2 border rounded w-full bg-gray-700 text-white"
                  placeholder="Add a skill"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addSkill(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded"
                  onClick={() => addSkill('New Skill')} // Example skill add
                >
                  Add Skill
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={basicInfo.name}
                    onChange={handleBasicInfoChange}
                    placeholder="Name"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="username"
                    value={basicInfo.username}
                    onChange={handleBasicInfoChange}
                    placeholder="Username"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="birthDate"
                    value={basicInfo.birthDate}
                    onChange={handleBasicInfoChange}
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={basicInfo.email}
                    onChange={handleBasicInfoChange}
                    placeholder="Email"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    value={basicInfo.location}
                    onChange={handleBasicInfoChange}
                    placeholder="Location"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="organization"
                    value={basicInfo.organization}
                    onChange={handleBasicInfoChange}
                    placeholder="Organization"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="website"
                    value={basicInfo.website}
                    onChange={handleBasicInfoChange}
                    placeholder="Website"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={basicInfo.phone}
                    onChange={handleBasicInfoChange}
                    placeholder="Phone"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="preferredLanguage"
                    value={basicInfo.preferredLanguage}
                    onChange={handleBasicInfoChange}
                    placeholder="Preferred Language"
                    className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div>
                {experience.map((exp, index) => (
                  <div key={index} className="space-y-4">
                    <input
                      type="text"
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(e, index)}
                      placeholder="Position"
                      className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                    />
                    <input
                      type="text"
                      name="type"
                      value={exp.type}
                      onChange={(e) => handleExperienceChange(e, index)}
                      placeholder="Type of Experience"
                      className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                    />
                    <textarea
                      name="details"
                      value={exp.details}
                      onChange={(e) => handleExperienceChange(e, index)}
                      placeholder="Experience details"
                      className="w-full p-2 mb-2 border rounded bg-gray-700 text-white"
                    />
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded"
                      onClick={() => handleExperienceRemove(index)}
                    >
                      Remove Experience
                    </button>
                  </div>
                ))}
                <button
                  className="px-6 py-3 mt-4 bg-green-600 text-white rounded"
                  onClick={addExperience}
                >
                  Add Experience
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded"
                onClick={handleSave}
              >
                Save Changes
              </button>
              <button
                className="px-6 py-3 bg-gray-600 text-white rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
