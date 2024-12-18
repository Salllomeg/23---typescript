import React from 'react';
import { Gender, Person } from '../../static/data';

type UserFormProps = {
  newUser: Partial<Person>;
  setNewUser: (user: Partial<Person>) => void;
  addUser: () => void;
  userCount: number;
};

const UserForm = React.memo(({ newUser, setNewUser, addUser, userCount }: UserFormProps) => {
  return (
    <tr>
        <td>{userCount + 1}</td>
        <td>
            <input
             type="text"
             value={newUser.first_name || ''}
             onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
             placeholder="First Name"
            />
        </td>
        <td>
            <input
             type="text"
             value={newUser.last_name || ''}
             onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
             placeholder="Last Name"
            />
        </td>
        <td>
            <input
             type="email"
             value={newUser.email || ''}
             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
             placeholder="Email"
            />
        </td>
        <td>
            <input
             type="text"
             value={newUser.age || ''}
             onChange={(e) => {
             const value = e.target.value;
             if (value === '' || /^[0-9]*$/.test(value)) {
             setNewUser({ ...newUser, age: value === '' ? undefined : Number(value) });
             }
            }}
            placeholder="Age"
            />
        </td>
        <td>
            <input
             value={newUser.gender || ''}
             onChange={(e) => setNewUser({ ...newUser, gender: e.target.value as Gender })}
             placeholder="Gender"
             />
        </td>
        <td>
            <input
             type="text"
             value={newUser.job || ''}
             onChange={(e) => setNewUser({ ...newUser, job: e.target.value })}
             placeholder="Job"
             />
        </td>
        <td>
            <input
             type="text"
             value={newUser.country || ''}
             onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
             placeholder="Country"
            />
        </td>
        <td>
            <button onClick={addUser}>Add</button>
        </td>
    </tr>
    );
});

export default UserForm;