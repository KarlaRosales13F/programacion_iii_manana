
export default function UserCard({ user }) {
  return (<div> {user.name} - {user.lastName} - {user.age} años - vivo en - {user.address} - {user.phone}
    </div>
  );
}
