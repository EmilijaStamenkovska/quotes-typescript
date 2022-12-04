// Core
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import { Button } from '../../ui/button';
// Styles
import styles from './style.module.css';

export const QuotesListPage = () => {
    const navigate = useNavigate()

    const [quotes, setQuotes] = React.useState<Quote[]>(Array);
    const [genderData, setGenderData] = React.useState<any[]>(Array);

    const onClickHandler = () => {
        navigate('/random-quote');
    };

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random/10')
            .then((result) => result.json())
            .then((data) => {
                setQuotes(data);
                const params = new URLSearchParams();
                data.map((quote: any) => params.append('name[]', quote.character.name.split(' ')[0]));

                fetch('https://api.genderize.io/?' + params.toString(), {
                    method: 'GET'
                })
                    .then((result) => result.json())
                    .then((data) => setGenderData(data))
            })
            .catch((err) => alert(err));
    }, []);

    return (
        <div className={styles.quotes}>
            {
                quotes.length > 0
                    ?
                    <table>
                        <thead>
                            <tr >
                                <th>id</th>
                                <th>quote</th>
                                <th className={styles.character}>character</th>
                                <th>gender</th>
                                <th>slug</th>
                                <th>house</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                quotes.map((quote, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td className={styles.quotes_sentence}>
                                                {quote.sentence}
                                            </td>
                                            <td>
                                                {quote.character.name}
                                            </td>
                                            <td>
                                                {genderData?.[index]?.gender === 'female' ? '👧🏻' : '👦🏻'}
                                            </td>
                                            <td>{quote.character.slug}</td>
                                            <td>{quote.character.house.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <h2>loading...</h2>
            }
            <Button
                customClassName={styles.btn_random_quote}
                onClick={onClickHandler}
                type='button'
            >
                get random quote
            </Button>
        </div>
    );
};

export default QuotesListPage;