const ExperienceSection = () => {
  const experiences = [
    {
      title: `My First Website`,
      description: [
        `Yes, I had a GeoCities site complete with background music, trailing cursor effects, guestbook and hit counter.`,
        `It is simultaneously my most and least proud project ever.`,
      ],
      period: `7th grade`,
      technologies: [`GeoCities`],
    },
    {
      title: `My Second Website`,
      description: [
        `I built a fanpage showcasing my favorite Pokemon, which was all 151 of them.`,
        `It featured modern layout design such as top header and left nav bar, structured with cutting-edge nested HTML tables.`,
        `My development efficiency improved dramatically after upgrading from Notepad to Wordpad.`,
      ],
      period: `8th grade`,
      technologies: [
        `MNHT (Many Nested HTML Tables)`,
        `HTML`,
        `CSS`,
        `Wordpad`,
        `Notepad`,
      ],
    },
    {
      title: `The Boston University Era`,
      description: [
        `I took a break from building websites to go to college, just like my parents always wanted.`,
        `Sometimes I wonder: What if my parents wanted me to create Facebook instead?`,
      ],
      period: `2003 - 2007`,
    },
    {
      title: `My First App, in EdTech`,
      description: [
        `GWT was my introduction to front-end frameworks, and I enjoyed every minute compiling Java... said no one ever.`,
        `Okay to be fair, it did help with cross-browser compatibility considering how fragmented they were at the time.`,
      ],
      period: `2010 - 2012`,
      technologies: [`Google Web Toolkit`, `Java`, `MarkLogic`],
    },
    {
      title: `Startup Life and Front-End Specialization`,
      description: [
        `After my first taste of AngularJS, I was hooked -- front-end development was my calling.`,
        `I built multiple 0 to 1 apps for a Boston-based startup, leveraging D3 to visualize large datasets.`,
        `The startup was acquired and as we parted ways, I caught a glimpse of something new and amazing...`,
        `Something that I just had to 'react' to.`,
      ],
      period: `2012 - 2019`,
      technologies: [`AngularJS`, `D3`, `Java`],
    },
    {
      title: `From Startup to Enterprise`,
      description: [
        `This is where I practiced things that some startups might consider taboo:`,
        `Code review, unit testing, security maintenance, documentation, and estimating tasks.`,
        `I also shuffled across different teams and got to work with a lot of really talented people.`,
        `And I gained a deep appreciation for teaching, learning and collaborating with others in a remote environment.`,
      ],
      period: `2019 - current`,
      technologies: [`React`, `TypeScript`, `Express`],
    },
    {
      title: `Personal Projects`,
      description: [
        `I enjoy getting hands-on with learning and building things.`,
        `My current favorite stack is Next.js + Tailwind + MongoDB.`,
      ],
      period: `Ongoing`,
      technologies: [
        `Next.js`,
        `Tailwind`,
        `MongoDB`,
        `Vue`,
        `Angular`,
        `AI`,
        `Copilot`,
        `The Latest Shiny Thing`,
      ],
    },
    {
      title: `My Next App`,
      description: [`Could be yours, let's build something together!`],
    },
  ];

  return (
    <div className='py-6 bg-white px-6'>
      <div className='space-y-4 w-full'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 text-center md:text-left'>
            Experience
          </h3>
          <div className='h-px w-full bg-gray-200 mt-2' />
        </div>

        <div className='space-y-5'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative'>
              <div className='relative pl-4 border-l-2 border-gray-200'>
                <div className='absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300' />

                <div className='space-y-1'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <h4 className='text-md font-medium text-gray-900'>
                      {exp.title}
                    </h4>
                    {exp.period && (
                      <span className='text-sm text-gray-500'>
                        {exp.period}
                      </span>
                    )}
                  </div>
                  {/* <p className='text-sm font-medium text-gray-600'>Some Co</p> */}
                  {exp.description.map((desc, index) => (
                    <p
                      key={index}
                      className='text-sm text-gray-600 leading-relaxed'
                    >
                      {desc}
                    </p>
                  ))}
                  {/* Technology Badges */}
                  {exp.technologies && (
                    <div className='flex flex-wrap gap-1.5 mt-2'>
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
