import { useState } from "react";
import styles from "./LoginBtn.module.css";

function LoginBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return (
      <button className={styles.following} onClick={onClickUnfollow}>
        Log out
      </button>
    );
  }

  return (
    <button className={styles.follow} onClick={onClickFollow}>
      Log In
    </button>
  );
}

export default LoginBtn;
