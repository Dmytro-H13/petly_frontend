import { NavLink } from 'react-router-dom';
import styles from './UserNav.module.scss';
export default function UserNav() {
  return (
    <div className={styles.userNavWrap}>
      <NavLink className={styles.userNavLink} to="user">
        <svg
          className={styles.userNavIcon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.66699C5.40002 1.66699 1.66669 5.40033 1.66669 10.0003C1.66669 14.6003 5.40002 18.3337 10 18.3337C14.6 18.3337 18.3334 14.6003 18.3334 10.0003C18.3334 5.40033 14.6 1.66699 10 1.66699ZM10 5.00033C11.6084 5.00033 12.9167 6.30866 12.9167 7.91699C12.9167 9.52533 11.6084 10.8337 10 10.8337C8.39169 10.8337 7.08335 9.52533 7.08335 7.91699C7.08335 6.30866 8.39169 5.00033 10 5.00033ZM10 16.667C8.30835 16.667 6.30835 15.9837 4.88335 14.267C6.34302 13.1218 8.1447 12.4993 10 12.4993C11.8553 12.4993 13.657 13.1218 15.1167 14.267C13.6917 15.9837 11.6917 16.667 10 16.667Z"
            fill="white"
          />
        </svg>
        Account
      </NavLink>
    </div>
  );
}
