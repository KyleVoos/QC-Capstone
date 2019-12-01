import React, { useEffect } from 'react';
import '../css/mainTailwind.css';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { Slider } from './AdSlide';

export const searchbar = (

    <div className="  mt-4 justify-center flex text-gray-600 lg:px-20 pl-5 pr-5">
        <input className=" rounded w-full lg:w-3/5 border-2 border-orange-500 bg-white h-15 px-5 pr-8 text-sm" type="search" name="search" placeholder="Search"></input>
        <button type="submit" className="px-4 py-2 border-2 rounded text-gray-300 border-orange-500 bg-white hover:text-white hover:border-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="15"><path className="heroicon-ui " fill="gray" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
        </button>
    </div>);

export const Home =(props)=> {
    useEffect(() => {
        document.title = `Home Depot - HomePage`;
    },[]);



    const recommend = (<div className=" w-full h-64 ti:h-72 md:h-76 lg:justify-center  lg:px-20 pr-5 pl-5">
        <div className="font-bold">Recommendation</div>
        <div className="px-4 bg-gray-200 ti:mx-4  md:mx-12 lg:mx-40 xl:px-32 ti:h-70 md:h-72 xl:h-78">
            <div className="flex border-2 h-56">
                <div className="bg-blue-400 w-1/2  ti:w-1/3 md:w-1/5 ti:h-70 md:h-72 xl:h-78">
                    <div className="bg-red-200 h-32 xl:h-48"> </div>
                </div>
                <div className="bg-blue-300 w-1/2 ti:w-1/3 md:w-1/5 ti:h-70 md:h-72 ">
                    <div className="bg-red-300 h-32 xl:h-48"></div>
                </div>
                <div className="bg-blue-700 hidden ti:block ti:w-1/3 md:w-1/5  ti:h-70 md:h-72">
                    <div className="bg-red-200 flex h-32 xl:h-48"> </div>
                </div>
                <div className="bg-blue-300 hidden md:block md:w-1/3 ti:h-70 md:h-72">
                    <div className="bg-red-300 h-32 xl:h-48"> </div>
                </div>
                <div className="bg-blue-200 hidden md:block md:w-1/3 ti:h-70 md:h-72">
                    <div className="bg-red-100 h-32 xl:h-48"> </div>
                </div>

            </div>

        </div>
        <div className="forgetText mr-1">See more</div>
    </div>);


    const Auto = autoPlay(SwipeableViews);
    const swiping = <div>
        <Auto enableMouseEvents>
            <div className=" h-76 flex ">
                <div className="bg-orange-400 h-full w-1/4"> </div>
                <div className="bg-orange-600 h-full w-1/4"> </div>
                <div className="bg-orange-400 h-full w-1/4"> </div>
                <div className="bg-orange-700 h-full w-1/4"> </div>
            </div>
            <div className=" h-76 flex">
                <div className="bg-blue-300 h-full w-1/4"> </div>
                <div className="bg-blue-600 h-full w-1/4"> </div>
                <div className="bg-blue-400 h-full w-1/4"> </div>
                <div className="bg-blue-700 h-full w-1/4"> </div>
            </div>
            <div className="bg-red-700 h-76"> </div>
        </Auto>
        </div>
  
    return (
        <div  >
            {searchbar}
            <br/>
            <Slider /> 
           
            {recommend}
            {swiping}
        

        </div>
    );
}
