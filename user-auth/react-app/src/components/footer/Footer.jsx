import React from 'react'
import '../content.css'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className="footerUL">
                <li className="footerLI">
                    <p className='linkText'>
                        <a className='linkText' href="https://github.com/John-Witter/news-connector" target='_blank'>
                            GitHub
                        </a>
                    </p>
                </li>
                <li className="footerLI">
                    <p className='linkText'>
                        <a className='linkText' href="https://github.com/John-Witter" target='_blank'>
                            John Witter
                        </a>
                    </p>
                </li>
                
                <li className="footerLI">
                    <p className='linkText'>
                        <a className='linkText' href="https://www.linkedin.com/in/john-witter-witlacil-556a3b158/" target='_blank'>
                            LinkedIn
                        </a>
                    </p>
                    </li>
            </ul>
        </div>
    )
}

export default Footer
