import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user, setUser }) => {
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="bg-white p-6 flex flex-col justify-center shadow-md rounded-lg">
                <h2 className='text-2xl font-semibold'>User Profile</h2>
                <p>You are not logged in.</p>
            </div>
        );
    }

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center py-6 px-4'>
            <div className="bg-white p-6 flex flex-col justify-center shadow-md rounded-lg">
            <h2 className='text-2xl font-semibold'>User Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Trainer Level:</strong> {user.trainerLevel}</p>
            <p><strong>Region:</strong> {user.region}</p>
            <p><strong>Badges:</strong> {user.badges}</p>
            <p><strong>Join Date:</strong> {user.joinDate}</p>
            <p><strong>Last Login:</strong> {user.lastLogin}</p>
            <h3><strong>Achievements:</strong></h3>
            <ul>
                {user.achievements.map((achievement) => (
                    <li key={achievement.achievementId}>
                        {achievement.name} (Earned on: {achievement.dateEarned})
                    </li>
                ))}
            </ul>
            <div className='mt-4'>
                <button onClick={handleLogout} className='bg-red-500 hover:bg-red-700 text-white rounded p-2 w-full'>Logout</button>
            </div>
        </div>
        </div>
        
    );
};

export default UserProfile;
