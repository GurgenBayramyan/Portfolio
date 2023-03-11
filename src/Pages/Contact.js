import React from 'react'

export default function Contact() {
  return (
    <>
    <main className="section">
        < div className='my_image'>
            <img  src='./me.jpg' alt='my image' title='my image' />
        </div>
        <div className="container">
                <h1 className="title-1">Contacts</h1>
                
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Yerevan, Armenia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+374 (44) 88-58-58</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:gugobayramyan@gmail.com">gugobayramyan@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </>
  )
}
