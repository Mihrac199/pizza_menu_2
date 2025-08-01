import { useState } from "react"
import Button from "../../ui/Button"

export default function CreateUser() {

  const [username, setUsername] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

  }

  return (

    <form onSubmit={handleSubmit}>

      <p className="mb-4 text-sm text-stone-600 md:text-base">Welcome... Please start by telling us your name</p>

      <input
        className="w-52 h-7 md:w-72 md:h-9 input mb-6"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" &&

        <div>
          <Button>Start Ordering</Button>
        </div>
      }

    </form>

  )

}