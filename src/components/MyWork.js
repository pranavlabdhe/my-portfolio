import React from 'react'
import styled from 'styled-components'
import '../App.css'
const MyWork = () => {
    return (
    <>
    <section class="my-work"id="work"id="mywork">
    <h2 id="my_work_title">My work</h2>
    <p class="section__subtitle section__subtitle--work">Projects made by me</p>
    <div class="portfolio">
                <a href="https://budgettt.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/BUDGET.png" alt="portfolio 2"class="portfolio__img"/>
            </a>
            <a href="https://movie-info-app-007.netlify.app/#trending" class="portfolio__item"target="_blank">
                <img src="/images/Movie Mania.png" alt="portfolio 3"class="portfolio__img"/>
            </a>
            <a href="https://foodreci.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/restaurant_website.png" alt="portfolio 4"class="portfolio__img"/>
            </a>
            <a href="https://mudrakaklotter.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/graphic_designer.png" alt="portfolio 5"class="portfolio__img"/>
            </a>
            <a href="https://quote-generator-app-001.netlify.app/" class="portfolio__item"target="_blank">
                <img src="/images/quote-generator.png" alt="portfolio 5"class="portfolio__img"/>
            </a>
            <a href="https://washndry.co.in/phone-repair/index.php" class="portfolio__item"target="_blank">
                <img src="/images/phone-repair.png" alt="portfolio 5"class="portfolio__img"/>
            </a>
    </div>    
    </section>
    </>
    )
}
const Section = styled.section`
    
`


export default MyWork
