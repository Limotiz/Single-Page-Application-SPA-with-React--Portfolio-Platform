# Tittle Personal SPA project 
A modern, responsive React application that allows users to view, add, and search projects dynamically.

# Tools
React

CSS

JavaScript

Vite

HTML

# Structure

src/
 ├── assets/components/
 │   ├── AddProject.jsx        # Form for adding projects
 │   ├── SearchBar.jsx         # Search input component
 │   ├── ProjectList.jsx       # Renders list of projects
 │   └── ProjectItem.jsx       # Displays a single project
 ├── App.jsx                   # Main application component
 ├── main.jsx                  # Application entry point
 └── App.css / index.css       # Styling

# How the app works

1. App.jsx holds the main state:

projects → list of all projects

search → search input value

2. AddProject

Collects user input

Sends new project data to App using props

3. SearchBar

Updates search state on every keystroke

4. ProjectList

Receives filtered projects via props

Renders a list of ProjectItem components

5. ProjectItem

Displays individual project details

# instalattion 
1. Get to the GitHub repository https://github.com/Limotiz?tab=repositories

2. Fork the repository to your GitHub account.

3. Clone the forked repository to your local machine.

4. Navigate to the project directory

5. Run any other installation to install the necessary dependancies

-npm install

-npm run dev

-http://localhost:5173

  # Contributing

  Community thrives in collaborations. It is what makes open source an amazing place to learn, create and inspire. If you want to make this project better your gesture is highly appreciated.

Please fork the repo and create a pull request.

1. Fork the Project

2. Create your Feature Branch (git checkout -b feature/fireFeatures)

3. Commit your changes (git commit -m " add some greatFeatures")

4. Push to the Branch (git push origin feature/ greatFeatures)

5. Open a Pull Request

# Contact

Limotiz  david.musembi2@student.moringaschool.com 

Project Link https://github.com/Limotiz/Single-Page-Application-SPA-with-React--Portfolio-Platform