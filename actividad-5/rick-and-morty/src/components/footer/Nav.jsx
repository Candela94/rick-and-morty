
import './footer.css';





export const Nav = ({}) => {




    return (


        <>

            <nav className='Nav'>
                <ul className='Nav-ul'>

                    <li><a href="#"><div className="Nav-item">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>

                        <p>Episodios</p>
                    </div>
                    </a></li>



                    <li><a href="#"><div className="Nav-item">

                       <img src="../public/img/rick-icono.png" alt="rick" style={{width: '48px'}} />
                        <p>Personajes</p>
                    </div>
                    </a></li>



                    <li><a href="#"><div className="Nav-item">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <p>Lugares</p>
                    </div>
                    </a></li>




                </ul>
            </nav>

        </>
    )


}