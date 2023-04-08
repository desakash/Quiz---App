import "./App.css";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const [questionsData, setQuestionsData] = useState([
  {
    question: "What is the capital of India?",
    option: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctOption: "New Delhi",
  },
  {
    question: "What is the currency of India?",
    option: ["Rupee", "Dollar", "Euro", "Yen"],
    correctOption: "Rupee",
  },
  {
    question: "What is the national animal of India?",
    option: ["Tiger", "Lion", "Elephant", "Leopard"],
    correctOption: "Tiger",
  },
  {
    question: "What is the national flower of India?",
    option: ["Lotus", "Rose", "Jasmine", "Marigold"],
    correctOption: "Lotus",
  },
  {
    question: "What is the official language of India?",
    option: ["English", "Hindi", "Bengali", "Telugu"],
    correctOption: "Hindi",
  },
  {
    question: "What is the name of the world's largest democracy?",
    option: ["China", "India", "United States", "Japan"],
    correctOption: "India",
  },
  {
    question: "Which river is considered sacred in Hinduism?",
    option: ["Ganges", "Nile", "Yangtze", "Amazon"],
    correctOption: "Ganges",
  },
  {
    question:
      "What is the name of the world's largest film industry by number of films produced?",
    option: ["Hollywood", "Bollywood", "Tollywood", "Lollywood"],
    correctOption: "Bollywood",
  },
  {
    question:
      "What is the name of the world's tallest statue located in India?",
    option: [
      "Statue of Unity",
      "Christ the Redeemer",
      "Great Sphinx of Giza",
      "Mount Rushmore",
    ],
    correctOption: "Statue of Unity",
  },
  {
    question:
      "Which Indian freedom fighter is also known as 'The Father of the Nation'?",
    option: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Subhas Chandra Bose",
    ],
    correctOption: "Mahatma Gandhi",
  },
  {
    question: "What is the name of the highest mountain peak in India?",
    option: [
      "Mount Everest",
      "Kangchenjunga",
      "Nanda Devi",
      "Mount Godwin-Austen",
    ],
    correctOption: "Kangchenjunga",
  },
  {
    question: "What is the name of the largest desert in India?",
    option: [
      "Thar Desert",
      "Great Basin Desert",
      "Mojave Desert",
      "Atacama Desert",
    ],
    correctOption: "Thar Desert",
  },
  // {
  //   question: "Which Indian state is known as 'The Land of Rising Sun'?",
  //   option: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya"],
  //   correctOption: "Arunachal Pradesh",
  // },
  // {
  //   question: "What is the name of the world's largest delta located in India?",
  //   option: ["Ganges Delta", "Amazon Delta", "Nile Delta", "Yangtze Delta"],
  //   correctOption: "Ganges Delta",
  // },
  // {
  //   question: "What is the name of the longest river in India?",
  //   option: ["Ganges", "Indus", "Brahmaputra", "Godavari"],
  //   correctOption: "Ganges",
  // },
  // {
  //   question: "Which Indian state is known as 'The Land of Spices'?",
  //   option: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
  //   correctOption: "Kerala",
  // },
  // {
  //   question:
  //     "What is the name of the world's largest film studio located in India?",
  //   option: [
  //     "Ramoji Film City",
  //     "Hengdian World Studios",
  //     "Pinewood Studios",
  //     "Universal Studios",
  //   ],
  //   correctOption: "Ramoji Film City",
  // },
  // {
  //   question: "Which Indian city is known as 'The Pink City'?",
  //   option: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
  //   correctOption: "Jaipur",
  // },
  // {
  //   question: "What is the name of the largest mosque in India?",
  //   option: [
  //     "Jama Masjid",
  //     "Taj-ul-Masajid",
  //     "Badshahi Mosque",
  //     "Fatehpuri Masjid",
  //   ],
  //   correctOption: "Jama Masjid",
  // },
  // {
  //   question: "What is the name of the largest wildlife sanctuary in India?",
  //   option: [
  //     "Jim Corbett National Park",
  //     "Kanha National Park",
  //     "Ranthambore National Park",
  //     "Sunderbans National Park",
  //   ],
  //   correctOption: "Jim Corbett National Park",
  // },
  // {
  //   question: "What is the smallest planet in our solar system?",
  //   option: ["Earth", "Mars", "Venus", "Mercury"],
  //   correctOption: "Mercury",
  // },
  // {
  //   question: "What is the name of the currency used in Japan?",
  //   option: ["Yen", "Won", "Dollar", "Euro"],
  //   correctOption: "Yen",
  // },
  // {
  //   question: "What is the capital city of France?",
  //   option: ["Paris", "London", "Berlin", "Rome"],
  //   correctOption: "Paris",
  // },
  // {
  //   question: "What is the name of the famous tower in Pisa, Italy?",
  //   option: [
  //     "Eiffel Tower",
  //     "Big Ben",
  //     "Leaning Tower of Pisa",
  //     "Tower Bridge",
  //   ],
  //   correctOption: "Leaning Tower of Pisa",
  // },
  // {
  //   question:
  //     "What is the name of the famous bridge connecting San Francisco and Marin County?",
  //   option: [
  //     "Brooklyn Bridge",
  //     "Golden Gate Bridge",
  //     "London Bridge",
  //     "Sydney Harbour Bridge",
  //   ],
  //   correctOption: "Golden Gate Bridge",
  // },
  // {
  //   question: "What is the name of the largest ocean in the world?",
  //   option: [
  //     "Pacific Ocean",
  //     "Atlantic Ocean",
  //     "Indian Ocean",
  //     "Arctic Ocean",
  //   ],
  //   correctOption: "Pacific Ocean",
  // },
  // {
  //   question: "What is the capital city of Australia?",
  //   option: ["Sydney", "Melbourne", "Canberra", "Perth"],
  //   correctOption: "Canberra",
  // },
  // {
  //   question:
  //     "What is the name of the famous statue located in Rio de Janeiro, Brazil?",
  //   option: [
  //     "The Christ the Redeemer",
  //     "The Statue of Liberty",
  //     "The Colosseum",
  //     "The Sphinx",
  //   ],
  //   correctOption: "The Christ the Redeemer",
  // },
  // {
  //   question:
  //     "What is the name of the famous clock tower located in London, England?",
  //   option: ["Big Ben", "Elgin Marbles", "The Parthenon", "The Colosseum"],
  //   correctOption: "Big Ben",
  // },
  // {
  //   question: "What is the capital city of Germany?",
  //   option: ["Berlin", "Paris", "London", "Rome"],
  //   correctOption: "Berlin",
  // },
  // {
  //   question:
  //     "What is the only planet in our solar system that rotates clockwise?",
  //   option: ["Mars", "Venus", "Jupiter", "Uranus"],
  //   correctOption: "Venus",
  // },
  // {
  //   question:
  //     "What is the mathematical term for the number that is equal to the sum of its proper divisors (excluding itself)?",
  //   option: [
  //     "Perfect Number",
  //     "Amicable Number",
  //     "Deficient Number",
  //     "Abundant Number",
  //   ],
  //   correctOption: "Perfect Number",
  // },
  // {
  //   question:
  //     "What is the term used to describe a sequence of numbers in which each number is the sum of the two preceding numbers?",
  //   option: [
  //     "Geometric Sequence",
  //     "Arithmetic Sequence",
  //     "Fibonacci Sequence",
  //     "Harmonic Sequence",
  //   ],
  //   correctOption: "Fibonacci Sequence",
  // },
  // {
  //   question: "What is the number of digits in the number 'googol'?",
  //   option: ["100", "1000", "100000", "100000000"],
  //   correctOption: "100",
  // },
  // {
  //   question: "What is the smallest prime number?",
  //   option: ["2", "3", "5", "7"],
  //   correctOption: "2",
  // },
  // {
  //   question:
  //     "What is the name of the theorem that states that the square root of two is an irrational number?",
  //   option: [
  //     "Fermat's Last Theorem",
  //     "Pythagorean Theorem",
  //     "Euclid's Elements",
  //     "Pell's Equation",
  //   ],
  //   correctOption: "Pythagorean Theorem",
  // },
  // {
  //   question:
  //     "What is the name of the problem that asks to find the most efficient way to connect seven bridges in a city?",
  //   option: [
  //     "Traveling Salesman Problem",
  //     "Bridge and Torch Problem",
  //     "Knapsack Problem",
  //     "Graph Coloring Problem",
  //   ],
  //   correctOption: "Bridge and Torch Problem",
  // },
  // {
  //   question:
  //     "What is the name of the equation that states that the sum of the squares of the first n natural numbers is equal to n(n+1)(2n+1)/6?",
  //   option: [
  //     "Euler's Formula",
  //     "Fibonacci Formula",
  //     "Sum of Squares Formula",
  //     "Gauss' Formula",
  //   ],
  //   correctOption: "Sum of Squares Formula",
  // },
  // {
  //   question:
  //     "What is the number of faces, edges, and vertices in a tetrahedron?",
  //   option: [
  //     "4 faces, 6 edges, 4 vertices",
  //     "4 faces, 8 edges, 6 vertices",
  //     "6 faces, 12 edges, 8 vertices",
  //     "4 faces, 4 edges, 4 vertices",
  //   ],
  //   correctOption: "4 faces, 4 edges, 4 vertices",
  // },
  // {
  //   question: "What is the value of x if 2x + 3 = 7?",
  //   option: ["2", "1", "0", "3"],
  //   correctOption: "2",
  // },
  // {
  //   question: "What is the square root of 256?",
  //   option: ["16", "12", "18", "14"],
  //   correctOption: "16",
  // },
  // {
  //   question: "What is the value of x if x^2 + 4x + 4 = 0?",
  //   option: ["-2, 2", "0, 4", "-4, 0", "2, -2"],
  //   correctOption: "-2, 2",
  // },
  // {
  //   question: "What is the value of x if log base 2 of x = 3?",
  //   option: ["8", "16", "24", "32"],
  //   correctOption: "8",
  // },
  // {
  //   question: "What is the sum of the interior angles of a hexagon?",
  //   option: ["720°", "540°", "360°", "180°"],
  //   correctOption: "720°",
  // },
  // {
  //   question: "What is the value of x if x / 4 = 12?",
  //   option: ["48", "36", "24", "12"],
  //   correctOption: "48",
  // },
  // {
  //   question: "What is the value of x if 2x - 3 = 15?",
  //   option: ["9", "12", "6", "8"],
  //   correctOption: "9",
  // },
  // {
  //   question: "What is the value of x if (x + 3)^2 = 16?",
  //   option: ["-5, 5", "5, -5", "-7, 7", "7, -7"],
  //   correctOption: "-5, 5",
  // },
  // {
  //   question: "What is the value of x if x^3 + 8 = 0?",
  //   option: ["2", "-2", "1", "-1"],
  //   correctOption: "-2",
  // },
  // {
  //   question: "What is the value of x if (x - 4)^2 = 9?",
  //   option: ["1, 7", "-7, -1", "7, 1", "-1, -7"],
  //   correctOption: "1, 7",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: C, F, J, O, ?",
  //   option: ["N", "S", "U", "T"],
  //   correctOption: "U",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: A, E, J, P, ?",
  //   option: ["R", "V", "Y", "X"],
  //   correctOption: "Y",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: C, F, J, O, T, ?",
  //   option: ["X", "Y", "Z", "W"],
  //   correctOption: "Z",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: B, G, N, U, ?",
  //   option: ["Y", "Z", "D", "A"],
  //   correctOption: "D",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: P, S, W, Z, ?",
  //   option: ["B", "C", "D", "E"],
  //   correctOption: "C",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: J, O, U, Z, ?",
  //   option: ["F", "G", "H", "I"],
  //   correctOption: "G",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: D, J, Q, Y, ?",
  //   option: ["H", "I", "G", "F"],
  //   correctOption: "H",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: B, F, K, P, ?",
  //   option: ["U", "V", "W", "X"],
  //   correctOption: "U",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: G, L, R, Y, ?",
  //   option: ["F", "E", "D", "C"],
  //   correctOption: "F",
  // },
  // {
  //   question:
  //     "What is the next term in the following alphanumeric series: A, F, M, T, ?",
  //   option: ["Z", "Y", "X", "W"],
  //   correctOption: "Z",
  // },
]);
  
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setdisabled] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#161616",
      },
      secondary: {
        main: "#cc5132",
      },
    },
  });

  let checkAnswer = (current, correct) => {
    console.log(current);
    console.log(correct);
    if (current === correct) {
      setScore(score + 1);
      console.log(score);
    }
    setdisabled(true);
  };

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
        if (minutes == 0) {
          setSeconds(59);
        }
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      setShowResult(true);
    }
    return () => clearInterval(timer);
  });

  return (
    <div>
      {showResult ? (
        <Box>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                margin: "20px 0px 20px 0px",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              RESULT:
            </Typography>
            <Typography
              color="primary"
              variant="h3"
              sx={{ margin: "20px 0px 20px 0px" }}
            >
              Your Score: {score}
            </Typography>
            <Typography
              color="primary"
              variant="h3"
              sx={{ margin: "20px 0px 20px 0px" }}
            >
              Percentage: {((score / questionsData.length) * 100).toFixed(2)}%
            </Typography>
            <Typography
              color="primary"
              variant="h3"
              sx={{ margin: "20px 0px 20px 0px" }}
            >
              Attempted Questions: {score}
            </Typography>
            <Typography
              color="error"
              variant="h3"
              sx={{ margin: "20px 0px 20px 0px" }}
            >
              Unattempted Questions / Wrong Answers:
              {questionsData.length - score}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  padding: "20px 30px 20px 30px",
                  fontWeight: "bolder",
                  background: "#cc5132",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "18px",
                }}
                endIcon={<RestartAltIcon />}
                onClick={() => {
                  setIndexNumber(0);
                  setScore(0);
                  setShowResult(false);
                  setMinutes(1);
                  setSeconds(30);
                  clearInterval(timer);
                }}
              >
                Reattempt Quiz
              </Button>
            </Box>
          </Container>
        </Box>
      ) : null}

      {!showResult ? (
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              backgroundColor: "#161616",
              color: "white",
              margin: "20px 0px 10px 0px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              Quiz App
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#ffb703" }}
            >
              Question # {indexNumber + 1} / {questionsData.length}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={(indexNumber + 1) * 10}
            sx={{ height: "8px", borderRadius: "10px", marginBottom: "20px" }}
          />
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h5"
              sx={{
                display: "inline",
                fontWeight: "bolder",
                marginRight: "30px",
              }}
            >
              Time Remaining:
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "inline",
                fontWeight: "bolder",
              }}
            >
              {minutes}:
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "inline",
                fontWeight: "bolder",
              }}
            >
              {seconds}
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "20px",
              margin: "10px",
              backgroundColor: "#161616",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              {questionsData[indexNumber].question}
            </Typography>
          </Box>
          <Box>
            {questionsData[indexNumber].option.map((e, i) => (
              <ThemeProvider key={i} theme={theme}>
                <Chip
                  key={i}
                  sx={{
                    width: "48%",
                    margin: "10px",
                    padding: "30px",
                    fontSize: "22px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  color="secondary"
                  disabled={disabled}
                  onClick={() => {
                    checkAnswer(e, questionsData[indexNumber].correctOption);
                  }}
                  label={e}
                />
              </ThemeProvider>
            ))}
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              endIcon={<NavigateNextIcon />}
              variant="contained"
              sx={{
                padding: "20px 30px 20px 30px",
                fontWeight: "bolder",
                background: "#cc5132",
                borderRadius: "20px",
                color: "white",
                fontSize: "18px",
              }}
              onClick={() => {
                if (indexNumber < questionsData.length) {
                  setIndexNumber(indexNumber + 1);
                  setdisabled(false);
                }
                if (indexNumber + 1 === questionsData.length) {
                  setIndexNumber(0);
                  setShowResult(true);
                }
              }}
            >
              Next Question
            </Button>
          </Box>
        </Container>
      ) : null}
    </div>
  );
}

export default App;
