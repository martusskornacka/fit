import React from 'react';

const Article = ({ title, text }) => {

    const styles = {
        marginTop: 40,
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase",
                fontSize: 18
            }}>{title}</h3>
            <p style={{ fontSize: 12 }}>{text}</p>
        </article>
    );
}

export default Article;