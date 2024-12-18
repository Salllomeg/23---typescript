import React from 'react';
import styles from './usersListTableHead.module.css';

export type SortType = 'asc' | 'desc';

type UsersListTableHeadProps = {
  sortByFirstName: () => void;
  nameSort: SortType | undefined;
  sortByAge: () => void;
  ageSort: SortType | undefined;
};

const UsersListTableHead = React.memo((props: UsersListTableHeadProps) => {
  const { sortByFirstName, nameSort, sortByAge, ageSort } = props;

  return (
    <thead>
      <tr>
        <th>Id</th>
        <th onClick={sortByFirstName}>
          <span className={styles.name}>First Name
            {nameSort && <img className={`${styles.sort_image} ${styles[nameSort]}`} src="https://cdn-icons-png.flaticon.com/512/2989/2989995.png" />}
          </span>
        </th>
        <th>Last Name</th>
        <th>Email</th>
        <th onClick={sortByAge}>
          <span className={styles.age}>Age
            {ageSort && <img className={`${styles.sort_image} ${styles[ageSort]}`} src="https://cdn-icons-png.flaticon.com/512/2989/2989995.png" />}
          </span>
        </th>
        <th>Gender</th>
        <th>Job</th>
        <th>Country</th>
        <th></th>
      </tr>
    </thead>
  );
});

export default UsersListTableHead;