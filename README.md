# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Resume Builder App:

This repository contains a Resume Builder application built using React with Vite, designed to create professional resumes effortlessly. The app utilizes a range of technologies to provide a seamless user experience, including Redux for state management, JSPdf for generating PDF resumes, and localStorage for local data storage.

Features:

Well-defined Templates: Choose from a variety of well-defined templates to create a personalized resume.
Redux Store: Store user input data across six different slices: Post applied for, Template, Personal Info, Work Experience, Education, and Skills.
Dynamic Template Filling: Selected template is dynamically filled with user input data to provide an accurate preview in the resume preview section.
PDF Generation: Generate downloadable PDF resumes using JSPdf package.
Local Storage: Store created resumes locally in the user's browser via localStorage, accessible in the 'My Resume' section.
Resume Management: Users can delete and re-download their resumes as needed.
Usage

Clone the repository:

bash

Install dependencies:

bash
Copy code
cd resume-builder-app
npm install
Run the application:

bash
Copy code
npm run dev
Access the app in your browser at http://localhost:3000.

Technologies Used
1.React
2.Vite
3.Redux
4.JSPdf
5.localStorage

Contributing :

Contributions are welcome! Feel free to open an issue or submit a pull request to suggest features or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.
