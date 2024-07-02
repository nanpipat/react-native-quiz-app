import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LeaderboardEntry } from "../types";

interface LeaderboardItemProps {
  entry: LeaderboardEntry;
  rank: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ entry, rank }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rank}>{rank}</Text>
      <Text style={styles.name}>{entry.name}</Text>
      <Text style={styles.score}>{entry.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 5,
  },
  rank: {
    fontWeight: "bold",
    fontSize: 18,
    width: 30,
    color: "#333",
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  score: {
    fontWeight: "bold",
    fontSize: 18,
    width: 50,
    textAlign: "right",
    color: "#333",
  },
});

export default LeaderboardItem;
