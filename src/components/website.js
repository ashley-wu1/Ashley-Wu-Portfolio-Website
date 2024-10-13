
export const Header = () =>{
    return (
        <div className="banner">
            <img src="src/images/Wu, Ashley Photo.jpg" alt="Profile Photo"></img>
            <h2>Ashley Wu</h2>
            <h3>About Me</h3>
            <h3>Experience</h3>
            <h3>Projects</h3>
            <h3>Resume</h3>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="footer">
            <p>Email: ashleyw2444@gmail.com</p>
            <LinkedinIcon />
        </div>
    )
}

export const LinkedinIcon = () => {
    return (
        <img src="src/assets/LinkedIn Icon.jpeg"
        ahref="https://www.linkedin.com/in/ashleywu797/"></img>
    )
}