import React from 'react'
import ProfileCard from './SubPages/ProfileCart'
import SkillsCard from './SubPages/SkiilsCard'
import JobCard from './SubPages/JobCard'
import JobCard2 from './SubPages/JobCard2'
import ProfileList from './SubPages/ProfileList'
import JobListings from './SubPages/JobListings'
import AboutYou from './SubPages/AboutYou'

function Profile() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
        <ProfileCard />
        <SkillsCard/>
        <JobCard/>

      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/4 p-2 mb-4 md:mb-0">
       <AboutYou/>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-1/4 p-2">
      <ProfileList />
        <JobCard2 />
        <JobListings />
      </aside>


    </div>
  )
}

export default Profile