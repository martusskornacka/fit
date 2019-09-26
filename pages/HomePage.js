import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Jak wyrobić u siebie zdrowe nawyki zywieniowe?",
        text: "Lorem ipsum",
    },
    {
        id: 2,
        title: "Czy mleko jest szkodliwe?",
        text: "Lorem ipsum",
    },
    {
        id: 3,
        title: "Gluten",
        text: "Lorem ipsum",
    },
    {
        id: 4,
        title: "Czytamy etykiety",
        text: "Lorem ipsum",
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id}{...article} />
    ))
    return (
        <div className="home">{artList}</div>
    )
}

export default HomePage;