import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import LeaderboardItem from "../components/LeaderboardItem";
import { LeaderboardEntry } from "../types";

const LeaderboardScreen: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // In a real app, you would fetch the leaderboard data from an API or local storage
    const mockLeaderboard: LeaderboardEntry[] = [
      { name: "Player 1", score: 18 },
      { name: "Player 2", score: 16 },
      { name: "Player 3", score: 15 },
      { name: "Player 4", score: 14 },
      { name: "Player 5", score: 12 },
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <LeaderboardItem entry={item} rank={index + 1} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default LeaderboardScreen;
