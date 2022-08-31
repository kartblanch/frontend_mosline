import React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SendIcon from '@mui/icons-material/Send';
import styles from "./QuestionsCard.module.scss";

export const QuestionsCard = () => {
    const Quest = [
        {
            "id": "1",
            "question": "Earth moving around the sun at  ____________ per hour",
            "answers": ["670,000 miles", "67,000 miles", "6,700 miles", "670 miles"],
            "correctAnswer": "67,000 miles"

        },
        {
            "id": "2",
            "question": "Earth is Mostly Comprised of the following except ________",
            "answers": ["Iron", "Air", "Silicon", "Oxygen"],
            "correctAnswer": "Air"

        },
        {
            "id": "3",
            "question": "The highest recorded temperature on Earth is  ________",
            "answers": ["134 degrees Fahrenheit", "34 degrees Fahrenheit", "20 degrees Fahrenheit", "160 degrees Fahrenheit"],
            "correctAnswer": "134 degrees Fahrenheit"

        },
        {
            "id": "5",
            "question": "Earth is 4.5 Billion Years Old",
            "answers": ["True", "False"],
            "correctAnswer": "True"

        },
        {
            "id": "6",
            "question": "The lowest recorded temperature on Earth is _______",
            "answers": ["128.5 degrees Fahrenheit", "0 degrees Fahrenheit", "-100.5 degrees Fahrenheit", "-128.5 degrees Fahrenheit"],
            "correctAnswer": "-128.5 degrees Fahrenheit"

        },
        {
            "id": "7",
            "question": "The Earth’s Atmosphere Extends to a Distance of 10,000 km",
            "answers": ["False", "True", "Maybe"],
            "correctAnswer": "True"

        },
        {
            "id": "8",
            "question": "A year on Earth is exactly ______ days ",
            "answers": ["366", "365", "365.2564", "300"],
            "correctAnswer": "365.2564"

        },
        {
            "id": "9",
            "question": "",
            "answers": ["nearly 30 kilometers per second", "nearly 30 meters per second", "nearly 30 kilometers per minute", "nearly 30 meters per minute"],
            "correctAnswer": "nearly 30 kilometers per second"

        },
        {
            "id": "10",
            "question": "Earth is Almost a Sphere",
            "answers": ["True", "False", "I don't know"],
            "correctAnswer": "True"

        }
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chosenAnswer, setChosenAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(false);
    const [clickedAnswer, setClickedAnswer] = useState(false);


    const checkAnswer = (answer) => {
        setChosenAnswer(answer);
        setClickedAnswer(true);
    };

    const checkCorrectAnswer = () => {
        if (chosenAnswer === Quest[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };
    const finished = () => {
        if (currentQuestion === Quest.length - 1) {
            setEnd(true);
        }
    };
    const reset = () => {
        setClickedAnswer(false);

    };

    const startOver = () => {
        setCurrentQuestion(0);
        setEnd(false);
        setChosenAnswer("");
        setScore(0);
    };

    if (end) {
        return (
            <Card
                sx={{height: 335}}
                className={styles.quizCard}
            >
                <CardContent>
                    <Typography variant="h5" component="div" style={{
                        marginTop: 50
                    }}>
                        {`Тестирование окончено! Ваш результат составляет
                 ${score / Quest.length * 100}%`}
                    </Typography>
                    <div style={{padding: 20}}>
                        <Button
                            variant="contained"
                            color="error"
                            className={styles.buttonNext}
                            onClick={() => startOver()}
                        >
                            Начать заново
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            className={styles.buttonPrev}
                        >
                            Переход к результатам
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );

    } else
        return (
            <Grid container justifyContent="center" style={{
                marginTop: 50
            }}>
                <div>
                    <Card className={styles.quizCard}>
                        <CardContent>
                            <Typography
                                variant="body1"
                                gutterBottom
                                component="div"
                                textAlign="center"
                            >
                <span className={styles.totalAnswered}>

                  {`${currentQuestion + 1}/${Quest.length}`}
                </span>
                                <br/>
                                {Quest[currentQuestion].question}

                            </Typography>
                        </CardContent>
                        <Box>
                            {Quest[currentQuestion].answers.map((answer, i) => (
                                <FormControl
                                    sx={{m: 3}}
                                    variant="standard"
                                    className={styles.ansOptions}
                                    key={i}
                                >
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="quiz"
                                        value={chosenAnswer}
                                        onClick={() => checkAnswer(answer)}
                                    >
                                        <FormControlLabel
                                            value={answer}
                                            name="answer"
                                            control={<Radio/>}
                                            label={answer}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            ))}
                            {clickedAnswer && (
                                <div>
                                    {currentQuestion !== 0 && (
                                        <Button
                                            variant="contained"
                                            color="error"
                                            className={styles.buttonPrev}
                                            onClick={() => {
                                                setCurrentQuestion(currentQuestion - 1);
                                                checkCorrectAnswer();
                                            }}
                                        >
                                            Назад
                                        </Button>
                                    )}
                                    {currentQuestion < Quest.length - 1 && (
                                        <Button
                                            variant="contained"
                                            color="success"
                                            display="block"
                                            className={styles.buttonNext}
                                            onClick={() => {
                                                setCurrentQuestion(currentQuestion + 1);
                                                checkCorrectAnswer();
                                                reset();
                                            }}
                                        >
                                            Далее
                                        </Button>
                                    )}
                                    {currentQuestion === Quest.length - 1 && (
                                        <Button
                                            variant="contained"
                                            endIcon={<SendIcon/>}
                                            display="block"
                                            className={styles.buttonNext}
                                            onClick={() => finished()}
                                        >
                                            Закончить тест
                                        </Button>
                                    )}
                                </div>
                            )}
                        </Box>
                    </Card>
                </div>
            </Grid>
        );
};