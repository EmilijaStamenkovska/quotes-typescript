// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import { Button } from '../../ui/button';
// Style
import styles from './style.module.css';

const randomQuote: Quote = {
    sentence: '',
    character: {
        name: '',
        slug: '',
        house: {
            name: '',
            slug: ''
        }
    }
};

const QuotesListPage = () => {
    const navigate = useNavigate();

    const [quote, setQuote] = useState<any>(randomQuote);
    const [refresh, setRefresh] = useState<boolean>(false);

    const onClickHandler = () => {
        navigate('/');
    };

    const getRandomQuote = () => {
        setRefresh(prevstate => !prevstate);
    };

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(result => result.json())
            .then(json => setQuote(json))
            .catch(err => alert(err))
    }, [refresh]);

    return (
        <div className={styles.random_quote_page}>
            <div className={styles.random_quote}>
                <span className={styles.random_quote__sentence}>
                    {quote.sentence}
                </span>
                <span className={styles.random_quote__name}>
                    {quote.character.name}
                </span>
                <Button
                    customClassName={styles.btn_new_random_quote}
                    type='submit'
                    onClick={getRandomQuote}
                >
                    get random quote
                </Button>
                <Button
                    customClassName={styles.btn_back_to_quotes}
                    onClick={onClickHandler}
                    type='button'
                >
                    back
                </Button>
            </div>
        </div>
    );
};

export default QuotesListPage;
