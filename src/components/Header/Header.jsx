import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

export const Header = () => {
    const isAuth = true;
    const isAdmin =false;

    const onClickLogout = () => {
    };

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <div>Тестирование сотрудников</div>
                    </a>
                    <div className={styles.buttons}>
                        {(() => {
                            if (isAuth && !isAdmin) {
                                return (
                                    <>
                                        <a href="/posts/create">
                                            <Button variant="contained">Пройти тестирование</Button>
                                        </a>
                                        <Button onClick={onClickLogout} variant="contained" color="error">
                                            Выйти
                                        </Button>
                                    </>
                                );
                            } else if (isAuth && isAdmin) {
                                return (
                                    <>
                                        <a href="/posts/create">
                                            <Button variant="contained">Тесты</Button>
                                        </a>
                                        <a href="/posts/create">
                                            <Button variant="contained">Создать пользователя</Button>
                                        </a>
                                        <a href="/posts/create">
                                            <Button variant="contained">Результаты</Button>
                                        </a>
                                        <Button onClick={onClickLogout} variant="contained" color="error">
                                            Выйти
                                        </Button>
                                    </>
                                );
                            } else {
                                return (
                                    <div>catch all</div>
                                );
                            }
                        })()}
                    </div>
                </div>
            </Container>
        </div>
    );
};
