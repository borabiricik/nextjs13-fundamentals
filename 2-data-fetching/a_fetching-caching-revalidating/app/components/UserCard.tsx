import Image from "next/image"
import { Name, Picture, Result } from "../types/UserCard"

interface Props {
  name: Name
  email: Result["email"]
  picture: Picture
}

const UserCard = ({ name, email, picture }: Props) => {
  const fullName = `${name.first} ${name.last}`
  return (
    <div className="border border-white rounded-md p-4 flex items-stretch space-x-10">
      <Image src={picture.thumbnail} alt={fullName} width={45} height={45} />
      <div>
        <p>Name: {fullName}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default UserCard
