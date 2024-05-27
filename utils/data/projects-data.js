import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Grocery Management System',
        description: "Me and my team built a Grocery Management System which is a computer offline application for our mini project in college using C# (DotNet Framework). We created the layout using Windows Forms .NET and handled the backend using C# and for database we used MySQL. We developed this application using Microsoft Visual Studio but we couldn't deploy it as we were changing our course towards web development. ",
        tools: ['C#', 'DotNet', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'Ghar-Dera (A Room Renting Web App)',
        description: 'Me and my team are developing a Room Renting System which is completely an Web Application for our minor project in college using React, Express and MongoDB. We are trying to create the layout using React js and handle backend using Express js. For database we will use MongoDB. We are tying to build it using Visual Studio Code and also we will deploy it as our first deployed project.',
        tools: ['Tailwind CSS', "React", "NodeJS", "ExpressJS", "MongoDB"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },