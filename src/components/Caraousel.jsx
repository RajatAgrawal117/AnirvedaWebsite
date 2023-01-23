import react from 'react';
import './Carousel.css';

const Carousel = () => {
    return(
    <>

        <div className="event-cards">
            <div class="cards">
                <article class="card">
                    <header>
                        <h2>Event-Card</h2>
                    </header>    
                    <img src="https://images.pexels.com/photos/12677142/pexels-photo-12677142.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Hot air balloons" />
                    <div class="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, esse officia dolorum amet, voluptatem magnam deserunt cumque blanditiis numquam ducimus dolores illo et aliquam iste tempore! Quos illum adipisci expedita!</p>
                    </div>
                </article>

                <article class="card">
                    <header>
                        <h2>Event-Card</h2>
                    </header>    
                    <img src="https://images.pexels.com/photos/14980851/pexels-photo-14980851.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nihil modi velit tempore commodi in dolorum quibusdam sapiente fugiat. Explicabo quam magni inventore iusto dolores, sit accusamus natus incidunt quasi?</p>
                    </div> 
                </article>

                <article class="card">
                    <header>
                        <h2>Event-Card</h2>
                    </header>    
                    <img src="https://images.pexels.com/photos/11207633/pexels-photo-11207633.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
                    <div class="content">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia distinctio soluta ducimus sunt, eum dicta dolores deleniti totam omnis adipisci rem excepturi, voluptatum enim. Distinctio amet quia laudantium recusandae!</p>
                    </div>
                </article>
            </div>
        </div>
     </>
    )
}

export default Carousel;