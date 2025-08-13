import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalistPortfolio() {
  return (
    <main className='min-h-screen flex flex-col bg-white md:flex-row'>
      {/* Left Column - Profile */}
      <div className='md:w-[320px] md:h-screen md:overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 md:flex md:items-center'>
        <ProfileSection />
      </div>

      {/* Right Column - Skills and Experience */}
      <div className='flex-1 md:h-screen md:overflow-y-auto'>
        {/* Experience Section */}
        <div className='pb-8'>
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}
