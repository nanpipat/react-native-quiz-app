import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import QuestionCard from "../components/QuestionCard";
import generateRandomQuestions from "../utils/quizData";
import { Question } from "../types";

const QuizScreen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setQuestions(generateRandomQuestions());
  }, []);

  const handleAnswerSelected = (index: number) => {
    if (index === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz finished, you can navigate to the leaderboard or show results\
      setFinish(true);
      console.log("Quiz finished. Score:", score);
    }
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    //if finish show score
    finish ? (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.scoreText}>Finished !! </Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </ScrollView>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswerSelected={handleAnswerSelected}
        />
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default QuizScreen;
