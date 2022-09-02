import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import DeleteIcon from '@mui/icons-material/Delete';
import 'easymde/dist/easymde.min.css';
import styles from './AddQuestion.module.scss';
import {Box, Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";


export const AddQuestion = () => {
    const [editorValue, setEditorValue] = React.useState('');
    const [answers, setAnswers] = React.useState([]);
    const [rightAnswers, setRightAnswers] = React.useState([]);

    const onChange = React.useCallback((value) => {
        setEditorValue(value);
    }, []);

    const handleAnswerValueChange = (index, e) => {
        const updatedValues = answers.map((value, i) => {
            if (i === index) {
                return e.target.value;
            } else {
                return value;
            }
        });
        setAnswers(updatedValues);
    };

    const deleteAnswer = (index) => {
        setAnswers(answers.filter((_, i) => index !== i));
        setRightAnswers(rightAnswers.filter((v) => index !== v));
    };

    const handleCheckedValueChange = (index, e) => {
        const checked = e.target.checked;
        let answers = [...rightAnswers];
        if (checked) {
            answers.push(index);
        } else {
            answers = answers.filter(a => a !== index);
        }

        setRightAnswers(answers);
    };

    const addAnswer = () => {
        setAnswers([...answers, ""]);
    };

    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '400px',
            autofocus: true,
            placeholder: 'Введите вопрос...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        [],
    );

    return (
        <Paper style={{padding: 30}}>
            <TextField
                classes={{root: styles.title}}
                variant="standard"
                placeholder="Заголовок теста..."
                fullWidth
            />
            <SimpleMDE className={styles.editor} value={editorValue} onChange={onChange} options={options}/>
            {answers.map((text, index) => (
                <Box key={"answer" + index}>
                    <Grid container spacing={2} justifyContent="left"
                          alignItems="center">
                        <Grid item xs={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Вариант ответа"
                                value={text || ""}
                                onChange={(e) => handleAnswerValueChange(index, e)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={() => deleteAnswer(index)}
                                    size="middle"
                                    variant="contained"
                                    color="error"
                                    //startIcon={<DeleteIcon />}
                            >
                                Удалить ответ
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked={false}
                                                       onChange={(e) => handleCheckedValueChange(index, e)}/>}
                                    label="Является правильным ответом"/>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Box>
            ))}
            <div className={styles.buttons}>
                <Button onClick={addAnswer} size="large" variant="contained">
                    Добавить ответ
                </Button>
                <Button size="large" variant="contained">
                    Опубликовать
                </Button>
                <a href="/">
                    <Button size="large" variant="contained" color="error">Отмена</Button>
                </a>
            </div>
        </Paper>
    );
};
