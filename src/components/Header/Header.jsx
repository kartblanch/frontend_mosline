import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

export const Header = () => {
    const isAuth = true;
    const isAdmin = false;

    const onClickLogout = () => {
    };

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <div className={styles.logo}>Тестирование сотрудников</div>
                    <div className={styles.buttons}>
                        {(() => {
                            if (isAuth && !isAdmin) {
                                return (
                                    <>
                                        <Link to="/start-test">
                                            <Button variant="contained">Пройти тестирование</Button>
                                        </Link>
                                        <Button onClick={onClickLogout} variant="contained" color="error">
                                            Выйти
                                        </Button>
                                    </>
                                );
                            } else if (isAuth && isAdmin) {
                                return (
                                    <>
                                        <Link to="/add-question">
                                            <Button variant="contained">Создать тест</Button>
                                        </Link>
                                        <Link to="/register">
                                            <Button variant="contained">Создать пользователя</Button>
                                        </Link>
                                        <Link to="/">
                                            <Button variant="contained">Результаты</Button>
                                        </Link>
                                        <Button onClick={onClickLogout} variant="contained" color="error">
                                            Выйти
                                        </Button>
                                    </>
                                );
                            }
                        })()}
                    </div>
                </div>
            </Container>
        </div>
    );
};
