import * as React from 'react';
import styles from "../Registration/Registration.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {BasicList} from "../../components/BasicList/BasicList";
import {QuestionsCard} from "../../components/QuestionsCard/QuestionsCard";

export const QuestionsList = () => {
    const [show, setShow] = React.useState(false);
    return (
        <>
            {
                !show ? (
                        <Paper classes={{root: styles.root}}>
                            <Typography classes={{root: styles.title}} variant="h5">
                                Выбор теста для прохождения
                            </Typography>
                            <BasicList/>
                            <Button
                                size="large"
                                variant="contained"
                                fullWidth
                                onClick={() => setShow(prev => !prev)}
                            >
                                Пройти тест
                            </Button>
                        </Paper>
                    )
                    :
                    (<QuestionsCard/>)
            }
        </>
    );
};
