import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get("https://mock-rbi-server.vercel.app/api/v1/leaderboard/");
                setLeaderboard(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className=" mx-auto p-6 bg-tertiary text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-Yeseva text-primary mb-6 text-center">🏆 Leaderboard</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-primary text-white text-lg">
                            <th className="py-3 px-4 text-left">Rank</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((user, index) => (
                            <tr
                                key={user.email}
                                className={`${
                                    index === 0
                                        ? "bg-yellow-500 text-black font-bold" // 🥇 First Place
                                        : index === 1
                                        ? "bg-gray-400 text-black font-semibold" // 🥈 Second Place
                                        : index === 2
                                        ? "bg-orange-400 text-black font-semibold" // 🥉 Third Place
                                        : "bg-secondary hover:bg-secondary/15 transition"
                                }`}
                            >
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;