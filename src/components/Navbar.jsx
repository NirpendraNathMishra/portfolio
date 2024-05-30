import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className='fixed flex flex-row justify-center bottom-0 m-auto w-[100%] h-[7vh] my-3 z-10'>
      <div className='flex flex-row justify-evenly items-center rounded-lg bg-[white] h-fit m-auto gap-[5%] xl:w-[35vw] min-[500px]:w-[400px] min-[400px]:w-[350px] w-[320px]'>
        <Link to='/'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${pathname === '/' ? '#2f2e41' : 'grey'}`} className="nav-icon w-6 h-6">
                <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>Home</span>
          </div>
        </Link>

        <Link to='/about'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${pathname === '/about' ? '#2f2e41' : 'grey'}`} className="w-6 h-6 nav-icon">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>About</span>
          </div>
        </Link>

        <Link to='/projects'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${pathname === '/projects' ? '#2f2e41' : 'grey'}`} className="nav-icon w-6 h-6">
                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>Projects</span>
          </div>
        </Link>

        <Link to='/skills'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${pathname === '/skills' ? '#2f2e41' : 'grey'}`} className="nav-icon w-6 h-6">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>Skills</span>
          </div>
        </Link>

        <Link to='/contact'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${pathname === '/contact' ? '#2f2e41' : 'grey'}`} className="w-6 h-6 nav-icon">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.593-.02.146-.067.297-.122.453a11.447 11.447 0 01-.37.831zm.51-2.482l.001.002zm1.195.593a11.863 11.863 0 01-1.36.158c.14-.245.272-.495.386-.75.205-.479.314-.953.345-1.366.045-.574-.1-1.11-.497-1.497A8.224 8.224 0 012.25 12c0-4.158 3.78-7.5 8.25-7.5s8.25 3.342 8.25 7.5-3.78 7.5-8.25 7.5a8.628 8.628 0 01-2.462-.358.75.75 0 00-.591.087A5.222 5.222 0 016 20.25c-.165 0-.326-.006-.485-.018zm-.382-1.506v-.001zm-.002-.004l-.001-.002v.003zm-.028-.097z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>Contact</span>
          </div>
        </Link>

        {/* Add this part to open the Google Drive link in a new tab */}
        <a href='https://drive.google.com/file/d/1AJYMUQzwQjCwKg7MKyADI-Tw8isW6fpS/view' target='_blank' rel='noopener noreferrer'>
          <div className='flex flex-col items-center'>
            <div className='grid place-items-center rounded-[50%] w-10 h-10'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='grey' className="w-6 h-6 nav-icon">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-xs'>Resume</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
