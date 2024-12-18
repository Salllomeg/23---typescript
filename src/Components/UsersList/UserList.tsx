import React, { useState, useCallback, useMemo } from "react"
import { data, Person } from "../../static/data"
import UsersListTableHead, {SortType} from "../UsersListTableHead/UsersListTableHead"
import styles from './UsersList.module.css'
import UserListItem from "../UserItem/UserListItem"
import UserForm from "../UserAddForm/UserForm"

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data);
  const [nameSort, setNameSort] = useState<SortType>();
  const [ageSort, setAgeSort] = useState<SortType>();
  const [newUser, setNewUser] = useState<Partial<Person>>({});

  const removeUser = useCallback((id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  }, []);


  const sortByFirstName = useCallback(() => {
    if (nameSort === 'asc') {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return 1
          if (userA.first_name < userB.first_name) return -1
          return 0
        })
        return newUsers
      })
      setNameSort('desc')
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return -1
          if (userA.first_name < userB.first_name) return 1
          return 0
        })
        return newUsers
      })
      setNameSort('asc')
    }

  }, [nameSort]);

  const sortByAge = useCallback(() => {
    if (ageSort === 'asc') {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => userA.age - userB.age);
        return newUsers;
      });
      setAgeSort('desc');
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => userB.age - userA.age);
        return newUsers;
      });
      setAgeSort('asc');
    }
  }, [ageSort]);


  const addUser = useCallback(() => {
    if (newUser.first_name && newUser.last_name) {
      const nextId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
      const newPerson: Person = {
        id: nextId,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email || '',
        age: newUser.age || 0,
        gender: newUser.gender ? newUser.gender : 'Other',
        job: newUser.job || '',
        country: newUser.country || ''
      };
      setUsers([...users, newPerson]);
      setNewUser({});
    }
  }, [newUser, users]);

  const sortedUsers = useMemo(() => {
    const sorted = [...users];
    if (nameSort) {
      sorted.sort((a, b) => {
        return nameSort === 'asc'
          ? a.first_name.localeCompare(b.first_name)
          : b.first_name.localeCompare(a.first_name);
      });
    } else if (ageSort) {
      sorted.sort((a, b) => {
        return ageSort === 'asc' ? a.age - b.age : b.age - a.age;
      });
    }
    return sorted;
  }, [users, nameSort, ageSort]);

  return (
    <div className={styles.table_container}>
      <table>
        <UsersListTableHead 
          sortByFirstName={sortByFirstName} 
          nameSort={nameSort}
          sortByAge={sortByAge}
          ageSort={ageSort}
        />
        <tbody>
          {sortedUsers.map(user => (
            <UserListItem key={user.id} user={user} removeUser={removeUser} />
          ))}
          <UserForm 
            newUser={newUser}
            setNewUser={setNewUser}
            addUser={addUser}
            userCount={users.length}
          />
        </tbody>
      </table>
    </div>
  );
};

export default UserList;