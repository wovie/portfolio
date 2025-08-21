import Image from 'next/image';

const ProfileSection = () => {
  return (
    <div className='w-full py-8 md:py-0 bg-white px-6 pt-16'>
      <div className='space-y-8 text-center'>
        <div className='relative w-28 md:w-40 h-28 md:h-40 mx-auto'>
          <div className='relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200'>
            <Image
              src='/profile-1.png'
              alt='Profile'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
            Woy Vien
          </h1>
          <h2 className='text-lg md:text-xl text-gray-600'>Web Developer</h2>
          <div className='h-px w-16 bg-gray-200 mx-auto my-4' />
          <p className='text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed'>
            Building everything from personal projects to enterprise
            applications
          </p>
        </div>

        <div className='space-y-4'>
          {/* Contact Info */}
          <div className='flex items-center justify-center space-x-2'>
            <svg
              className='w-4 h-4 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
            <a
              href='mailto:woy@woviestudios.com'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              woy@woviestudios.com
            </a>
          </div>

          <div className='flex items-center justify-center space-x-2'>
            <svg
              className='w-4 h-4 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span className='text-sm text-gray-600'>Fairfield, CT</span>
          </div>

          {/* Social Links */}
          <div className='flex items-center justify-center pt-2 gap-3'>
            <a
              href='https://github.com/wovie'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-600 hover:text-gray-900'
            >
              <svg
                viewBox='0 0 24 24'
                width='22'
                height='20'
                fill='currentColor'
              >
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://linkedin.com/in/wovie'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-600 hover:text-gray-900'
            >
              <svg
                viewBox='0 0 24 24'
                width='22'
                height='20'
                fill='currentColor'
              >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </a>
            <a
              href='https://wovie-frontend-mentor.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-600 hover:text-gray-900'
            >
              <svg
                viewBox='0 0 24 24'
                width='22'
                height='20'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='1'
              >
                <g>
                  <path d='M24.459 12.106a.756.756 0 0 1-.307-.065l-6.438-2.883a.751.751 0 0 1 0-1.37l6.438-2.873a.752.752 0 0 1 .991.379.752.752 0 0 1-.38.991l-4.905 2.189 4.906 2.197a.75.75 0 0 1-.305 1.435z' />
                  <path d='M15.686 22.565c-7.078 0-13.266-4.778-15.045-11.62a.749.749 0 1 1 1.451-.378 14.044 14.044 0 0 0 13.594 10.498.75.75 0 0 1 0 1.5z' />
                  <path d='M13.102 16.336a.75.75 0 0 1-.75-.75V1.33a.75.75 0 0 1 1.5 0v14.257a.75.75 0 0 1-.75.749z' />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
