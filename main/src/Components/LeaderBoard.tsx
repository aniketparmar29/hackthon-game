import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  points: number;
}

interface Props {
  apiUrl: string;
}

const Leaderboard: React.FC<Props> = ({ apiUrl }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    };
    fetchUsers();
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => b.points - a.points)
            .map((user, index) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
