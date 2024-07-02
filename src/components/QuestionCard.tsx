import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  onAnswerSelected: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswerSelected,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.text}</Text>
      {question.answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => onAnswerSelected(index)}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  answerButton: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  answerText: {
    color: "#333",
    fontSize: 16,
  },
});

export default QuestionCard;
