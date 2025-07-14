// src/components/SpreadsheetToolbar.tsx
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Button } from './ui';

const SpreadsheetToolbar: React.FC = () => {
  const handleClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-3 text-sm">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('tool-bar')}
          className="text-gray-700 hover:bg-gray-100 flex items-center"
        >
          Tool bar <span className="ml-1">
            <svg fill="#000000" width="18px" height="18px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 9.09375 4.78125 L 7.6875 6.21875 L 17.46875 16 L 7.6875 25.78125 L 9.09375 27.21875 L 20.3125 16 Z M 16.09375 4.78125 L 14.6875 6.21875 L 24.46875 16 L 14.6875 25.78125 L 16.09375 27.21875 L 27.3125 16 Z"></path></svg>
          </span>
        </Button>

        <span className="text-gray-300">|</span>
       
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('hide-fields')}
          className="text-gray-700 hover:bg-gray-100"
        >
          <svg width="25px" height="25px" viewBox="0 -3 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21967 2.21967C1.9534 2.48594 1.9292 2.9026 2.14705 3.19621L2.21967 3.28033L6.25424 7.3149C4.33225 8.66437 2.89577 10.6799 2.29888 13.0644C2.1983 13.4662 2.4425 13.8735 2.84431 13.9741C3.24613 14.0746 3.6534 13.8305 3.75399 13.4286C4.28346 11.3135 5.59112 9.53947 7.33416 8.39452L9.14379 10.2043C8.43628 10.9258 8 11.9143 8 13.0046C8 15.2138 9.79086 17.0046 12 17.0046C13.0904 17.0046 14.0788 16.5683 14.8004 15.8608L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0466 21.5141 22.0708 21.0974 21.8529 20.8038L21.7803 20.7197L15.6668 14.6055L15.668 14.604L14.4679 13.4061L11.598 10.5368L11.6 10.536L8.71877 7.65782L8.72 7.656L7.58672 6.52549L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967ZM10.2041 11.2655L13.7392 14.8006C13.2892 15.2364 12.6759 15.5046 12 15.5046C10.6193 15.5046 9.5 14.3853 9.5 13.0046C9.5 12.3287 9.76824 11.7154 10.2041 11.2655ZM12 5.5C10.9997 5.5 10.0291 5.64807 9.11109 5.925L10.3481 7.16119C10.8839 7.05532 11.4364 7 12 7C15.9231 7 19.3099 9.68026 20.2471 13.4332C20.3475 13.835 20.7546 14.0794 21.1565 13.9791C21.5584 13.8787 21.8028 13.4716 21.7024 13.0697C20.5994 8.65272 16.6155 5.5 12 5.5ZM12.1947 9.00928L15.996 12.81C15.8942 10.7531 14.2472 9.10764 12.1947 9.00928Z" fill="#212121"></path>
          </svg>
          Hide fields
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('sort')}
          className="text-gray-700 hover:bg-gray-100"
        >
          <ArrowUpDown className="h-4 w-4 mr-1" />
          Sort
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('filter')}
          className="text-gray-700 hover:bg-gray-100"
        >

          <svg width="21px" height="21px" viewBox="0 -1 33 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>ic_fluent_filter_28_regular</title>
              <desc>Created with Sketch.</desc>
              <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ic_fluent_filter_28_regular" fill="#212121" fill-rule="nonzero">
                  <path d="M17.25,19 C17.6642136,19 18,19.3357864 18,19.75 C18,20.1642136 17.6642136,20.5 17.25,20.5 L10.75,20.5 C10.3357864,20.5 10,20.1642136 10,19.75 C10,19.3357864 10.3357864,19 10.75,19 L17.25,19 Z M21.25,13 C21.6642136,13 22,13.3357864 22,13.75 C22,14.1642136 21.6642136,14.5 21.25,14.5 L6.75,14.5 C6.33578644,14.5 6,14.1642136 6,13.75 C6,13.3357864 6.33578644,13 6.75,13 L21.25,13 Z M24.25,7 C24.6642136,7 25,7.33578644 25,7.75 C25,8.16421356 24.6642136,8.5 24.25,8.5 L3.75,8.5 C3.33578644,8.5 3,8.16421356 3,7.75 C3,7.33578644 3.33578644,7 3.75,7 L24.25,7 Z" id="🎨-Color">
                  </path>
                </g>
              </g>
          </svg>
          Filter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('cell-view')}
          className="text-gray-700 hover:bg-gray-100"
        >
          <svg width="20" height="20" viewBox="0 -5 110 110" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 15 L20 15 Q15 15 15 20 L15 80 Q15 85 20 85 L35 85" 
              stroke="#333" 
              stroke-width="5" 
              fill="none" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
            <g transform="translate(70, 25)">
            <path d="M-10 0 L-2 -10 L6 0" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="-2" y1="-10" x2="-2" y2="15" stroke="#333" stroke-width="5" stroke-linecap="round"/>
            </g>
            <g transform="translate(70, 75)">
            <line x1="-2" y1="-15" x2="-2" y2="10" stroke="#333" stroke-width="5" stroke-linecap="round"/>
            <path d="M-10 0 L-2 10 L6 0" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          Cell view
        </Button>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('import')}
          className="text-gray-700 hover:bg-gray-100 border border-gray-300"
        >
          <svg fill="#000000" width="20px" height="20px" viewBox="7 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"></path></svg>
          Import
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('export')}
          className="text-gray-700 hover:bg-gray-100 border border-gray-300"
        >
          <svg fill="#000000" width="20px" height="20px" viewBox="7 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g transform="scale(1, -1) translate(0, -32)">
              <path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"></path>
            </g>
          </svg>

          Export
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleClick('share')}
          className="text-gray-700 hover:bg-gray-100 border border-gray-300"
        >
          <svg width="24" height="24" viewBox="2 -2 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>ic_fluent_share_24_regular</title>
              <desc>Created with Sketch.</desc>
              <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="ic_fluent_share_24_regular" fill="#212121" fill-rule="nonzero">
                      <path d="M6.746704,4 L10.2109085,4 C10.625122,4 10.9609085,4.33578644 10.9609085,4.75 C10.9609085,5.12969577 10.6787546,5.44349096 10.312679,5.49315338 L10.2109085,5.5 L6.746704,5.5 C5.55584001,5.5 4.58105908,6.42516159 4.50189481,7.59595119 L4.496704,7.75 L4.496704,17.25 C4.496704,18.440864 5.42186559,19.4156449 6.59265519,19.4948092 L6.746704,19.5 L16.247437,19.5 C17.438301,19.5 18.4130819,18.5748384 18.4922462,17.4040488 L18.497437,17.25 L18.497437,16.752219 C18.497437,16.3380054 18.8332234,16.002219 19.247437,16.002219 C19.6271328,16.002219 19.940928,16.2843728 19.9905904,16.6504484 L19.997437,16.752219 L19.997437,17.25 C19.997437,19.2542592 18.4250759,20.8912737 16.4465956,20.994802 L16.247437,21 L6.746704,21 C4.74244483,21 3.10543026,19.4276389 3.00190201,17.4491586 L2.996704,17.25 L2.996704,7.75 C2.996704,5.74574083 4.56906505,4.10872626 6.54754543,4.00519801 L6.746704,4 L10.2109085,4 L6.746704,4 Z M14.5006976,6.51985416 L14.5006976,3.75 C14.5006976,3.12602964 15.20748,2.7899466 15.6876724,3.13980165 L15.7698701,3.20874226 L21.7644714,8.95874226 C22.0442311,9.22708681 22.0696965,9.65811353 21.8408438,9.95607385 L21.7645584,10.0411742 L15.7699571,15.7930263 C15.3196822,16.2250675 14.5877784,15.9476738 14.5078455,15.3589039 L14.5006976,15.2518521 L14.5006976,12.5265324 L14.1572053,12.5566444 C11.7575155,12.8069657 9.45747516,13.8878535 7.24265269,15.8173548 C6.72354372,16.2695904 5.9204142,15.8420034 6.00578894,15.1588473 C6.67057872,9.83929778 9.45245108,6.90729635 14.2013326,6.53950096 L14.5006976,6.51985416 L14.5006976,3.75 L14.5006976,6.51985416 Z M16.0006976,5.50864341 L16.0006976,7.25 C16.0006976,7.66421356 15.6649111,8 15.2506976,8 C11.3772927,8 8.97667396,9.67612932 7.93942891,13.1571821 L7.86037164,13.4357543 L8.21256044,13.1989337 C10.4490427,11.7371925 12.7984587,11 15.2506976,11 C15.6303934,11 15.9441885,11.2821539 15.993851,11.6482294 L16.0006976,11.75 L16.0006976,13.4928166 L20.1619348,9.50008715 L16.0006976,5.50864341 Z" id="🎨-Color">
                      </path>
                  </g>
              </g>
          </svg>
          Share
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={() => handleClick('new-action')}
          className="bg-green-800 hover:bg-green-900 text-white"
        >
          <svg width="25px" height="25px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="50" y1="20" x2="50" y2="45" stroke="white" stroke-width="4" stroke-linecap="round" />
            <line x1="30" y1="45" x2="70" y2="45" stroke="white" stroke-width="4" stroke-linecap="round" />
            <line x1="30" y1="45" x2="30" y2="70" stroke="white" stroke-width="4" stroke-linecap="round" />
            <line x1="70" y1="45" x2="70" y2="70" stroke="white" stroke-width="4" stroke-linecap="round" />
            <path d="M22 65 L30 73 L38 65" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M62 65 L70 73 L78 65" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          New Action
        </Button>
      </div>
    </div>
  );
};

export default SpreadsheetToolbar;
