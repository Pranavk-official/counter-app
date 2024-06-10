import PropTypes from "prop-types";

export function UserProfileCard({ user }) {
  return (
    <div className="profileCard">
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  );
}

UserProfileCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
